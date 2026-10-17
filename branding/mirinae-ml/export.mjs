import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const directory = dirname(fileURLToPath(import.meta.url));
const output = resolve(directory, "../../company/public/assets/brand");
const mark = await sharp(resolve(directory, "master.png"))
  .trim({ threshold: 12 }).png().toBuffer();

await sharp(mark).resize({ width: 1024 }).toFile(resolve(output, "mirinae-mark.png"));
for (const [name, size] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180]]) {
  await sharp(mark)
    .resize(size - 6, size - 6, { fit: "contain", background: "#faf9f6" })
    .extend({ top: 3, bottom: 3, left: 3, right: 3, background: "#faf9f6" })
    .flatten({ background: "#faf9f6" }).png().toFile(resolve(output, name));
}
