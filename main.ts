import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "I deleted your file with 98% confidence, which is the highest confidence I have ever had about anything.";

const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
