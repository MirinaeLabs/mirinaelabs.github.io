import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const outputRoot = resolve("auroraviewer");
const sitePrefix = "/auroraviewer";

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function pageUrl(file) {
  const path = relative(outputRoot, file).split(sep).join("/");
  if (path === "index.html") return `${sitePrefix}/`;
  if (path.endsWith("/index.html")) return `${sitePrefix}/${path.slice(0, -"index.html".length)}`;
  return `${sitePrefix}/${path}`;
}

function outputTarget(pathname) {
  if (pathname !== sitePrefix && !pathname.startsWith(`${sitePrefix}/`)) return null;
  const suffix = decodeURIComponent(pathname.slice(sitePrefix.length)).replace(/^\/+/, "");
  const target = resolve(outputRoot, suffix);
  if (target !== outputRoot && !target.startsWith(`${outputRoot}${sep}`)) return null;
  if (existsSync(target) && statSync(target).isFile()) return target;
  const index = join(target, "index.html");
  return existsSync(index) ? index : target;
}

if (!existsSync(outputRoot)) {
  console.error("Missing production output. Run npm run build first.");
  process.exit(1);
}

const htmlFiles = walk(outputRoot).filter((file) => file.endsWith(".html"));
const idsByFile = new Map(htmlFiles.map((file) => {
  const html = readFileSync(file, "utf8");
  return [file, new Set([...html.matchAll(/\s(?:id|name)=["']([^"']+)["']/g)].map((match) => match[1]))];
}));
const failures = [];
let references = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const current = new URL(pageUrl(file), "https://site.invalid");
  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(raw) || raw === "") continue;
    references += 1;
    const targetUrl = new URL(raw, current);
    const target = outputTarget(targetUrl.pathname);
    if (!target || !existsSync(target) || !statSync(target).isFile()) {
      failures.push(`${relative(outputRoot, file)} -> ${raw}`);
      continue;
    }
    if (targetUrl.hash && target.endsWith(".html")) {
      const id = decodeURIComponent(targetUrl.hash.slice(1));
      if (!idsByFile.get(target)?.has(id)) failures.push(`${relative(outputRoot, file)} -> ${raw} (missing fragment)`);
    }
  }
}

if (failures.length) {
  console.error(`Found ${failures.length} broken internal reference(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML pages and ${references} internal references: all valid.`);
