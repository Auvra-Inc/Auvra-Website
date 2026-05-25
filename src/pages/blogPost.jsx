// src/pages/blogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
  const { slug } = useParams();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const markdownModule = await import(`../content/blog/${slug}.md?raw`);
        const rawContent = markdownModule.default;
        
        const titleMatch = rawContent.match(/title:\s*(.*)/i);
        const dateMatch = rawContent.match(/date:\s*(.*)/i);
        const imageMatch = rawContent.match(/image:\s*(.*)/i);
        const authorMatch = rawContent.match(/author:\s*(.*)/i);
        const subtitleMatch = rawContent.match(/subtitle:\s*(.*)/i);
        const descriptionMatch = rawContent.match(/description:\s*(.*)/i);
        
        const clean = (match) => match ? match[1].replace(/['"]/g, '').trim() : null;
        
        const parts = rawContent.split(/---\s*\n/);
        let mainContent = parts[2] || parts[1] || rawContent;
        mainContent = mainContent.replace(/^---[\s\S]*?---/, '').trim();
        
        // Formatting with LIGHTER font weight and JUSTIFIED text
        mainContent = mainContent
          .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 500; color: black;">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">$1</a>')
          .replace(/_?([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})_?/g, '<a href="mailto:$1" style="color: #2563eb; text-decoration: underline;">$1</a>')
          .split('\n\n').map(para => {
            if (para.trim()) {
              return `<p style="color: black; font-weight: 300; line-height: 1.6; margin-bottom: 1.2rem; font-size: 1rem; width: 100%; max-width: 100%; text-align: justify; letter-spacing: 0.01em;">${para.replace(/\n/g, ' ')}</p>`;
            }
            return '';
          }).join('');
        
        const rawDate = clean(dateMatch);
        let formattedDate = "Recently Published";
        if (rawDate) {
          const date = new Date(rawDate);
          formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
        }
        
        // Get description for SEO (first 160 characters of content)
        const seoDescription = clean(descriptionMatch) || mainContent.replace(/<[^>]*>/g, '').substring(0, 160);
        
        setPost({
          title: clean(titleMatch) || "Untitled",
          formattedDate: formattedDate,
          imageUrl: clean(imageMatch) || "/og-image.png",
          author: clean(authorMatch) || "Auvra Team",
          subtitle: clean(subtitleMatch) || "",
          content: mainContent,
          seoTitle: `${clean(titleMatch) || "Untitled"} | Auvra Blog`,
          seoDescription: seoDescription,
          seoImage: clean(imageMatch) || "https://www.goauvra.com/og-image.png"
        });
        setLoading(false);
      } catch (error) {
        console.error("Post not found:", error);
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Article not found</h1>
        <Link to="/blog" className="text-black underline">Back to Blog</Link>
      </div>
    );
  }

  // Get the full URL for sharing
  const fullUrl = `https://www.goauvra.com/blog/${slug}`;

  return (
    <>
      {/* DYNAMIC SEO META TAGS for each blog post */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:image" content={post.seoImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Auvra" />
        
        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.seoDescription} />
        <meta name="twitter:image" content={post.seoImage} />
        
        {/* Article Meta Tags */}
        <meta property="article:published_time" content={post.rawDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content="Blog" />
      </Helmet>
      
      <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0 }}>
        {/* HERO SECTION */}
        <div className="relative w-full h-screen max-h-[100vh] overflow-hidden" style={{ margin: 0, padding: 0 }}>
          
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="pt-15 pb-7 flex justify-center">
              <Link to="/" className="flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-white">
                {/* FIXED: Using the same logo as your main page */}
                <img 
                  src="/Logo-png.PNG" 
                  alt="Auvra Logo" 
                  className="w-6 h-6 object-contain" 
                />
                <span className="font-clash">Auvra</span>
              </Link>
            </div>
            
            {/* Glass card container */}
            <div className="flex-1 flex items-center justify-center mt-72 md:mt-80">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl mx-6 md:mx-12 p-8 md:p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/20 shadow-2xl"
              >
                {/* Date at the TOP of the glass card */}
                <div className="mb-6">
                  <span className="text-base font-medium text-white/90">
                    {post.formattedDate}
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-clash font-bold text-white leading-tight mb-4">
                  {post.title}
                </h1>
                
                {post.subtitle && (
                  <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                    {post.subtitle}
                  </p>
                )}
                
                <div className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                  <span className="font-medium">{post.author}</span>
                </div>
              </motion.div>
            </div>
            
            <div className="h-10" />
          </div>
        </div>
        
        {/* MAIN CONTENT */}
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', padding: '1.5rem 0' }}>
            <div style={{ width: '100%', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                style={{ 
                  width: '100%',
                  maxWidth: '100%',
                  margin: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
