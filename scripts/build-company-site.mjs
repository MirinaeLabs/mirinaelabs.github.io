import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

const output = resolve("dist");
const origin = "https://mirinaelabs.com";

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { stdio: "inherit", env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

// The existing GitHub Pages product output stays untouched.
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
cpSync(resolve("company"), output, { recursive: true });
run(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "build", "--", "--outDir", "./dist/auroraviewer"],
  {
    ...process.env,
    SITE_URL: origin,
  },
);

function pages(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory()
      ? pages(file)
      : file.endsWith("index.html")
        ? [file]
        : [];
  });
}

const urls = pages(output).map((file) => {
  const path = relative(output, file)
    .split(sep)
    .join("/")
    .replace(/index\.html$/, "");
  return `  <url><loc>${origin}/${path}</loc></url>`;
});
writeFileSync(
  join(output, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
run(process.execPath, ["scripts/check-site.mjs", "dist", ""]);
console.log(`Company website ready: ${output}`);
