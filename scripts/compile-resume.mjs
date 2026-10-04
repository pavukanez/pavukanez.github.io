import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { compile } = require("node-tectonic");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const texFile = join(root, "resume/NguyenPham_SoftwareEngineer.tex");
const resumeDir = join(root, "resume");
const pdfName = "NguyenPham_SoftwareEngineer.pdf";

const result = await compile({
  texFile,
  outputDir: resumeDir,
  timeout: 180_000,
  onStdout: (chunk) => process.stdout.write(chunk),
  onStderr: (chunk) => process.stderr.write(chunk),
});

if (!result.success) {
  console.error(result.stderr || "Tectonic failed to compile the résumé.");
  process.exit(1);
}

console.log(`Compiled ${pdfName} in resume/`);
