// 1. Set the default fallback info (For the Homepage)
    let title = 'Auvra - The Permanent Home For Human Culture';
    let description = 'Auvra is the permanent home for human culture. Preserve traditions, languages, and stories as verified permanent records.';
    let image = 'https://www.goauvra.com/og-image.png'; // <--- DEFAULT IMAGE

    // 2. Change the text AND the image based on the specific page
    if (url.pathname === '/about') {
      title = 'About Us | Auvra';
      description = 'Learn about our mission to build a permanent home for human history and traditions.';
      image = 'https://www.goauvra.com/about-preview.png'; // <--- UNIQUE ABOUT IMAGE
      
    } else if (url.pathname === '/blog') {
      title = 'Blog | Auvra';
      description = 'Read the latest stories and updates on cultural preservation and technology.';
      image = 'https://www.goauvra.com/blog-preview.png'; // <--- UNIQUE BLOG IMAGE
      
    } else if (url.pathname === '/institutional-access') {
      title = 'Institutional Access | Auvra';
      description = 'For museums and government bodies looking to preserve cultural heritage at scale.';
      image = 'https://www.goauvra.com/institutional-preview.png'; // <--- UNIQUE INSTITUTIONAL IMAGE
    }