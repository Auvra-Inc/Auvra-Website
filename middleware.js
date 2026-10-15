export const config = {
  matcher: ['/', '/about', '/blog', '/blog/:slug*', '/institutional-access'],
};

const PREVIEW_PAGES = {
  '/': {
    title: 'Auvra - The Permanent Home For Human Culture',
    description: 'Auvra is the permanent home for human culture. Preserve traditions, languages, and stories as verified permanent records. Built for creators, families, communities and institutions.',
    image: 'https://www.goauvra.com/og-image.png',
    url: 'https://www.goauvra.com/',
  },
  '/about': {
    title: 'About Us | Auvra',
    description: 'Learn about our mission to build a permanent home for human history and traditions. Auvra preserves languages, oral histories, and cultural heritage using blockchain and AI.',
    image: 'https://www.goauvra.com/about-preview.png',
    url: 'https://www.goauvra.com/about',
  },
  '/blog': {
    title: 'Blog | Auvra',
    description: 'Read the latest stories and updates on cultural preservation and technology. News about Auvra, blockchain, and African heritage.',
    image: 'https://www.goauvra.com/blog-preview.png',
    url: 'https://www.goauvra.com/blog',
  },
  '/institutional-access': {
    title: 'Institutional Access | Auvra',
    description: 'For museums, archives, and government bodies looking to preserve cultural heritage at scale. Auvra provides permanent, verifiable preservation for institutions.',
    image: 'https://www.goauvra.com/institutional-preview.png',
    url: 'https://www.goauvra.com/institutional-access',
  },
};

// Only real search/social crawlers. Generic words (e.g. "linux", "check", "search")
// must not appear here: "linux" alone matched every Android browser.
const BOT_UA_REGEX = /googlebot|google-inspectiontool|googleother|storebot-google|adsbot-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandex|applebot|petalbot|seznambot|sogou|naver|facebookexternalhit|facebookcatalog|meta-externalagent|twitterbot|linkedinbot|slackbot|discordbot|whatsapp|telegrambot|pinterest|redditbot|embedly|skypeuripreview|ahrefsbot|semrushbot|mj12bot|dotbot|ia_archiver/i;

function isBot(userAgent) {
  return BOT_UA_REGEX.test(userAgent || '');
}

function buildFullHtml({ title, description, image, url, isHome }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary META TAGS -->
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="Auvra, GoAuvra, cultural preservation, African creators, oral history, heritage, diaspora, blockchain culture, Lens AI" />
  <meta name="author" content="Auvra" />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Auvra" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  
  <!-- Canonical -->
  <link rel="canonical" href="${url}" />
  
  <!-- Language -->
  <meta http-equiv="Content-Language" content="en" />
  <link rel="alternate" hreflang="en" href="${url}" />
  <link rel="alternate" hreflang="x-default" href="${url}" />
  
  ${isHome ? `<!-- Site name for Google Search (must be on the homepage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Auvra",
    "alternateName": ["GoAuvra", "Auvra Inc"],
    "url": "https://www.goauvra.com/"
  }
  </script>
  ` : ''}
  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Auvra",
    "alternateName": "GoAuvra",
    "url": "https://www.goauvra.com",
    "logo": "https://www.goauvra.com/og-image.png",
    "description": "${description}",
    "email": "info@goauvra.com",
    "knowsAbout": [
      "Cultural Infrastructure",
      "Cultural Preservation",
      "Digital Heritage",
      "Blockchain Technology",
      "Artificial Intelligence"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "NVIDIA Inception Program",
        "url": "https://www.nvidia.com"
      },
      {
        "@type": "Organization",
        "name": "ElevenLabs Grants",
        "url": "https://elevenlabs.io"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/goauvra/",
      "https://x.com/goauvra"
    ]
  }
  </script>
  
  <!-- FAQ Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a badge on Auvra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A badge is a permanently verifiable cultural record. It can be a piece of art, a family story, a traditional recipe, a language lesson, or a craft technique."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between a Collectible Badge and a Contribution Badge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Collectible Badge is meant to be owned and collected. A Contribution Badge is for records that belong to everyone, like languages and oral history, verified by the community."
        }
      },
      {
        "@type": "Question",
        "name": "How does Auvra ensure cultural authenticity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Auvra relies on a decentralized network of community elders and verified cultural custodians to review and authenticate records."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to understand blockchain to use Auvra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Auvra handles all the complex technology in the background. You can use it just like any other app."
        }
      },
      {
        "@type": "Question",
        "name": "Can institutions and communities use Auvra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, institutions, museums, and community organizations can create verified accounts to preserve their cultural archives."
        }
      }
    ]
  }
  </script>
  
  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.goauvra.com/"
      }
    ]
  }
  </script>
  
  <!-- Hidden SEO content for bots -->
  <style>
    .seo-content {
      display: none;
      visibility: hidden;
      position: absolute;
      height: 0;
      width: 0;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="seo-content">
    <h1>${isHome ? 'Auvra' : title}</h1>
    <p><a href="https://www.goauvra.com/">Auvra</a> is the permanent home for human culture.</p>
    <p><a href="https://www.goauvra.com/about">About Auvra</a> — learn how Auvra preserves traditions, languages, and stories.</p>
    <p><a href="https://www.goauvra.com/blog">Auvra Blog</a> — latest news and updates from Auvra.</p>
    <p><a href="https://www.goauvra.com/contact">Contact Auvra</a> — get in touch with the Auvra team.</p>
    <p><a href="https://www.goauvra.com/faqs">Auvra FAQs</a> — frequently asked questions about Auvra.</p>
    <p>GoAuvra is the call to action to join <a href="https://www.goauvra.com/">Auvra</a>.</p>
    <p><a href="https://www.goauvra.com/">Auvra</a> is built for creators, families, and communities worldwide.</p>
    
    <h2>What is Auvra?</h2>
    <p>${description}</p>
    
    <h3>How Auvra Works</h3>
    <p>Auvra is a blockchain-based platform that creates permanent, verifiable cultural records called Badges. Every badge contains the full context, provenance, and history of a cultural item.</p>
    
    <h3>Who Uses Auvra</h3>
    <p>Creators use Auvra to turn their art into collectible digital badges while retaining ownership. Families use Auvra to preserve personal legacies. Communities and museums use Auvra to create living archives.</p>
    
    <h3>Why Cultural Preservation Matters</h3>
    <p>According to UNESCO, 40% of the world's 7,000 languages are endangered. Auvra was built to stop this loss by providing a permanent, verifiable home for human culture.</p>
  </div>
  
  <p>Loading Auvra... Please enable JavaScript to experience the full platform.</p>
</body>
</html>`;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const userAgent = request.headers.get('user-agent') || '';

  if (isBot(userAgent)) {
    let previewData;

    // Handle dynamic blog post routes
    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '');
      previewData = {
        title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Auvra Blog`,
        description: 'Read the latest stories and updates on cultural preservation and technology.',
        image: 'https://www.goauvra.com/blog-preview.png',
        url: `https://www.goauvra.com/blog/${slug}`,
      };
    } else {
      previewData = PREVIEW_PAGES[pathname] || PREVIEW_PAGES['/'];
    }

    // Always use the clean www URL as canonical, never request.url (which can carry
    // query strings or the non-www host and split signals across URLs).
    const html = buildFullHtml({ ...previewData, isHome: pathname === '/' });
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=7200',
        'X-Robots-Tag': 'index, follow',
      },
    });
  }

  return;
}
