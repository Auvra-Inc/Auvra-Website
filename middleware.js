export const config = {
  matcher: ['/', '/about', '/blog', '/institutional-access'],
};

const PREVIEW_PAGES = {
  '/': {
    title: 'Auvra - The Permanent Home For Human Culture',
    description:
      'Auvra is the permanent home for human culture. Preserve traditions, languages, and stories as verified permanent records.',
    image: 'https://www.goauvra.com/og-image.png',
  },
  '/about': {
    title: 'About Us | Auvra',
    description:
      'Learn about our mission to build a permanent home for human history and traditions.',
    image: 'https://www.goauvra.com/about-preview.png',
  },
  '/blog': {
    title: 'Blog | Auvra',
    description:
      'Read the latest stories and updates on cultural preservation and technology.',
    image: 'https://www.goauvra.com/blog-preview.png',
  },
  '/institutional-access': {
    title: 'Institutional Access | Auvra',
    description:
      'For museums and government bodies looking to preserve cultural heritage at scale.',
    image: 'https://www.goauvra.com/institutional-preview.png',
  },
};

const BOT_UA_REGEX = /bot|crawler|spider|facebookexternalhit|facebookcatalog|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegram|pinterest/i;

function isBot(userAgent) {
  return BOT_UA_REGEX.test(userAgent || '');
}

function buildHtml({ title, description, image, url }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
</head>
<body>
  <p>${description}</p>
</body>
</html>`;
}

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '') || '/';
  const userAgent = request.headers.get('user-agent') || '';

  if (!isBot(userAgent)) {
    return fetch(request);
  }

  const previewData = PREVIEW_PAGES[pathname] || PREVIEW_PAGES['/'];
  const html = buildHtml({ ...previewData, url: request.url });

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}
