import { chromium } from 'playwright';
const b = await chromium.launch();
const d = await b.newPage({ viewport: { width: 1366, height: 800 } });
await d.goto('http://localhost:3001/privacy-policy', { waitUntil: 'networkidle' });
const btn = d.getByRole('button', { name: /Scroll to top/ });
await d.evaluate(()=>window.scrollTo(0, 2200)); await d.waitForTimeout(500);
console.log('label:', await btn.getAttribute('aria-label'));
await d.screenshot({ path: '/tmp/sp_ring.png' });
await btn.click();
const samples = [];
for (let i=0;i<8;i++){ await d.waitForTimeout(150); samples.push(await d.evaluate(()=>Math.round(window.scrollY))); }
console.log('scrollY during animation:', samples.join(', '));
await d.waitForTimeout(1500);
console.log('final scrollY:', await d.evaluate(()=>Math.round(window.scrollY)), 'button opacity', await btn.evaluate(e=>getComputedStyle(e).opacity));
await b.close();
