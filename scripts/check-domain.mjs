import { Resolver } from "node:dns/promises";

const resolver = new Resolver({ timeout: 4000, tries: 2 });
const domain = "mirinaelabs.com";
const selector = process.argv[2];
let failures = 0;

function report(ok, name, detail) {
  console.log(`${ok ? "PASS" : "PENDING"} ${name}: ${detail}`);
  if (!ok) failures += 1;
}

async function query(method, name) {
  try {
    return await resolver[method](name);
  } catch (error) {
    if (!["ENODATA", "ENOTFOUND"].includes(error.code))
      console.error(`${name}: ${error.code ?? error.message}`);
    return [];
  }
}

const [ns, mx, txt, dmarc] = await Promise.all([
  query("resolveNs", domain),
  query("resolveMx", domain),
  query("resolveTxt", domain),
  query("resolveTxt", `_dmarc.${domain}`),
]);
const spf = txt
  .map((parts) => parts.join(""))
  .filter((value) => value.startsWith("v=spf1"));
report(
  ns.length >= 2 && ns.every((name) => name.endsWith(".ns.cloudflare.com")),
  "Cloudflare DNS",
  ns.join(", ") || "NS 미설정",
);
report(
  mx.some((record) =>
    /(?:^|\.)zoho\.(?:com|eu|in|com\.au|jp|com\.cn|ca|sa)$/.test(
      record.exchange,
    ),
  ),
  "Zoho 메일 수신",
  mx.map((record) => `${record.priority} ${record.exchange}`).join(", ") ||
    "MX 미설정",
);
report(spf.length === 1, "SPF", spf.join(" | ") || "TXT 미설정");
const dmarcRecords = dmarc
  .map((parts) => parts.join(""))
  .filter((value) => value.startsWith("v=DMARC1;"));
report(
  dmarcRecords.length === 1,
  "DMARC",
  dmarcRecords.join(" | ") || "TXT 미설정",
);

if (selector) {
  if (!/^[a-zA-Z0-9_-]+$/.test(selector))
    throw new Error(
      "DKIM selector에는 영문, 숫자, 밑줄, 하이픈만 사용할 수 있습니다.",
    );
  const name = `${selector}._domainkey.${domain}`;
  const [dkim, cname] = await Promise.all([
    query("resolveTxt", name),
    query("resolveCname", name),
  ]);
  const values = dkim.map((parts) => parts.join(""));
  report(
    values.some((value) => /(?:^|;)\s*p=\s*[^;\s]+/.test(value)) ||
      cname.length > 0,
    "DKIM 레코드",
    values.length
      ? "공개키 레코드 있음"
      : cname.join(", ") || "TXT/CNAME 미설정",
  );
} else {
  console.log(
    "SKIP DKIM: npm run check:domain -- <Zoho에서 지정한 selector> 로 조회하세요.",
  );
}

for (const path of ["/", "/auroraviewer/"]) {
  try {
    const response = await fetch(`https://${domain}${path}`, {
      signal: AbortSignal.timeout(10000),
    });
    report(
      response.ok &&
        response.headers.get("content-type")?.includes("text/html"),
      `HTTPS ${path}`,
      `${response.status} ${response.url}`,
    );
    await response.body?.cancel();
  } catch (error) {
    report(false, `HTTPS ${path}`, error.cause?.code ?? error.message);
  }
}
console.log(
  "DNS/HTTPS 조회만 수행했습니다. 실제 메일 수신·발신·스팸 판정은 외부 메일함과 왕복 테스트해야 합니다.",
);
process.exitCode = failures ? 1 : 0;
