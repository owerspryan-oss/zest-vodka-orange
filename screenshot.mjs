import puppeteer, { KnownDevices } from "puppeteer";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "temporary screenshots");
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] ? `-${process.argv[3]}` : "";

// Auto-increment screenshot number
const existing = readdirSync(dir).filter(f => f.startsWith("screenshot-")).map(f => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? parseInt(m[1]) : 0;
});
const n = existing.length ? Math.max(...existing) + 1 : 1;
const filename = `screenshot-${n}${label}.png`;
const outPath = join(dir, filename);

const isMobile = label.includes("mobile");

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
if (isMobile) {
  await page.emulate(KnownDevices["iPhone 14 Pro"]);
} else {
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
}
await page.goto(url, { waitUntil: "networkidle0" });
// Force all fade-up elements visible for full-page review
await page.addStyleTag({ content: ".fu { opacity: 1 !important; transform: none !important; transition: none !important; }" });
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
