// src/pages/blogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // ← ADDED Helmet Import

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
        
        const clean = (match) => match ? match[1].replace(/['"]/g, '').trim() : null;
        
        const parts = rawContent.split(/---\s*\n/);
        let mainContent = parts[2] || parts[1] || rawContent;
        mainContent = mainContent.replace(/^---[\s\S]*?---/, '').trim();
        
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
        
        const blogTitle = clean(titleMatch) || "Untitled";
        const blogDescription = clean(subtitleMatch) || "Read our latest blog post from Auvra, the Permanent Home for Human Culture.";
        const blogImage = clean(imageMatch) || "https://www.goauvra.com/og-image.png";
        
        setPost({
          title: blogTitle,
          formattedDate: formattedDate,
          imageUrl: blogImage,
          author: clean(authorMatch) || "Auvra Team",
          subtitle: clean(subtitleMatch) || "",
          content: mainContent,
          seoDescription: blogDescription // Stored for Helmet
        });
        
        // DELETED the setTimeout block here! Helmet handles it instantly now.
        
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
        {/* Basic Helmet for loading state */}
        <Helmet>
          <title>Loading Article | Auvra</title>
        </Helmet>
        <div className="text-xl">Loading article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Helmet>
          <title>Article Not Found | Auvra</title>
        </Helmet>
        <h1 className="text-2xl mb-4">Article not found</h1>
        <Link to="/blog" className="text-black underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0 }}>
      
      {/* ← ADDED HELMET BLOCK FOR DYNAMIC ARTICLE SEO */}
      <Helmet>
        <title>{`${post.title} | Auvra Blog`}</title>
        <meta name="description" content={post.seoDescription} />
        
        {/* Notice we use "article" instead of "website" here! */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:url" content={`https://www.goauvra.com/blog/${slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.seoDescription} />
        <meta name="twitter:image" content={post.imageUrl} />
      </Helmet>

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
              <img 
                src="/Vector .png" 
                alt="Auvra Logo" 
                className="w-6 h-6 object-contain" 
              />
              <span className="font-clash">Auvra</span>
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-center mt-72 md:mt-80">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-6 md:mx-12 p-8 md:p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/20 shadow-2xl"
            >
              <div className="mb-6">
                <span className="text-base font-medium text-white/90">
                  {post.formattedDate}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-clash font-bold text-white leading-tight mb-4 blog-title">
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
  );
}