import assert from "node:assert/strict";

const origin = process.env.VERIFY_ORIGIN ?? "http://localhost:3100";
const routes = [
  "/",
  "/about",
  "/services",
  "/become-streamer",
  "/become-agent",
  "/platforms",
  "/how-it-works",
  "/why-streamintia",
  "/success-stories",
  "/guides",
  "/faq",
  "/support",
  "/contact",
  "/apply",
  "/privacy-policy",
  "/terms-and-conditions",
  ...["poppo-live", "taka-live", "chamet", "niki-live"].map(
    (slug) => `/platforms/${slug}`,
  ),
];

const titles = new Set();
for (const route of routes) {
  const response = await fetch(`${origin}${route}`);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `${route}: one h1`,
  );
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${route}: unique title`);
  titles.add(title);
  assert.ok(html.includes('rel="canonical"'), `${route}: canonical`);
  assert.ok(
    html.includes('name="robots" content="noindex, nofollow"'),
    `${route}: preview indexing`,
  );
  assert.ok(html.includes('id="main-content"'), `${route}: skip target`);
}
for (const route of [
  "/blog",
  "/blog/getting-started-with-streaming",
  "/platforms/not-a-platform",
  "/blog/not-an-article",
  "/missing-page",
]) {
  assert.equal((await fetch(`${origin}${route}`)).status, 404, route);
}
const application = await (
  await fetch(`${origin}/apply?role=agent&platform=chamet`)
).text();
assert.match(application, /id="role"[^>]*value="agent"/);
assert.match(application, /<option value="chamet" selected="">/);
assert.match(application, /<button[^>]*disabled/);
assert.match(
  await (await fetch(`${origin}/robots.txt`)).text(),
  /Disallow: \//,
);
assert.doesNotMatch(
  await (await fetch(`${origin}/sitemap.xml`)).text(),
  /<loc>/,
);
for (const name of ["logo-dark", "logo-light", "icon"]) {
  assert.equal((await fetch(`${origin}/images/brand/${name}.png`)).status, 200);
}
console.log(
  `Passed: ${routes.length} pages, unique metadata, preview indexing, 404s, application defaults and brand assets.`,
);
