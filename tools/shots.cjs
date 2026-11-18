// Capturas de revisión: node tools/shots.cjs [url]
const puppeteer = require('puppeteer-core');
const url = process.argv[2] || require('url').pathToFileURL(require('path').resolve(__dirname, '../public/index.html')).href;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  const page = await browser.newPage();
  page.on('pageerror', (e) => console.log('ERROR', e.message));
  for (const [name, w, h] of [['desk', 1440, 900], ['mob', 390, 844]]) {
    await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluate(() => { localStorage.clear(); document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); });
    await wait(1200);
    await page.screenshot({ path: `tmp/${name}-hero.png` });
    await page.screenshot({ path: `tmp/${name}.png`, fullPage: true });
  }
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.click('[data-add="promo-1"]');
  await page.click('.card[data-id="promo-6"] input[value="Pollo"]');
  await page.click('[data-add="promo-6"]');
  await page.click('[data-add="mila-ternera"]');
  await page.click('[data-add="merluza"]');
  await page.click('[data-cat="pescado"]');
  await wait(800);
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')));
  await page.screenshot({ path: 'tmp/mob-filter.png' });
  await page.click('.nav [data-cart]');
  await wait(800);
  await page.screenshot({ path: 'tmp/mob-cart.png' });
  console.log(await page.$eval('#cartSend', (a) => decodeURIComponent(a.href)));
  await page.keyboard.press('Escape');
  await page.setViewport({ width: 1440, height: 900 });
  await page.click('.card-media[data-open="promo-4"]');
  await wait(800);
  await page.screenshot({ path: 'tmp/detail.png' });
  await browser.close();
})();
