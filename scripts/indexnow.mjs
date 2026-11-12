// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver and others) about the site's pages.
// Run after a deploy that adds or changes pages:  npm run indexnow
// Optional: pass specific URLs to send only those, e.g.  npm run indexnow -- https://www.dhruvahospitals.com/blog
//
// The key below must match the file public/<key>.txt, which the live site serves at /<key>.txt.

const HOST = 'www.dhruvahospitals.com';
const KEY = 'bbc7ee5756ca2efde0c49489db7bb5d5';
const SITE = `https://${HOST}`;

async function sitemapUrls() {
  const response = await fetch(`${SITE}/sitemap.xml`);
  if (!response.ok) throw new Error(`Could not read the sitemap (HTTP ${response.status})`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function main() {
  const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
  const keyText = keyCheck.ok ? (await keyCheck.text()).trim() : '';
  if (keyText !== KEY) {
    throw new Error(`${SITE}/${KEY}.txt must be live and contain the key before submitting. Deploy first.`);
  }

  const urls = process.argv.slice(2).length ? process.argv.slice(2) : await sitemapUrls();
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
  });
  // 200 and 202 both mean the URLs were accepted.
  console.log(`IndexNow: sent ${urls.length} URLs, response HTTP ${response.status} ${response.statusText}`);
  if (![200, 202].includes(response.status)) {
    console.log(await response.text());
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
