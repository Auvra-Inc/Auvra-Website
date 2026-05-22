// src/pages/blogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function BlogPost() {
  // Get the blog post slug from the URL
  const { slug } = useParams();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Load the markdown file that matches the slug
        const markdownModule = await import(`../content/blog/${slug}.md?raw`);
        const rawContent = markdownModule.default;
        
        // Parse the blog post metadata
        const titleMatch = rawContent.match(/title:\s*(.*)/i);
        const dateMatch = rawContent.match(/date:\s*(.*)/i);
        const imageMatch = rawContent.match(/image:\s*(.*)/i);
        const authorMatch = rawContent.match(/author:\s*(.*)/i);
        const subtitleMatch = rawContent.match(/subtitle:\s*(.*)/i);
        
        const clean = (match) => match ? match[1].replace(/['"]/g, '').trim() : null;
        
        // Extract the main content (everything after the ---)
        const parts = rawContent.split(/---\s*\n/);
        const mainContent = parts[2] || parts[1] || rawContent;
        
        // Format date nicely
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
        
        setPost({
          title: clean(titleMatch) || "Untitled",
          date: rawDate,
          formattedDate: formattedDate,
          imageUrl: clean(imageMatch) || "/art3.png",
          author: clean(authorMatch) || "Auvra Team",
          subtitle: clean(subtitleMatch) || "",
          content: mainContent
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

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Full width image with glassy overlay */}
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col overflow-hidden">
        
        {/* Background Image - Full coverage */}
        <div className="absolute inset-0 z-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Logo - Original style from blog page, but WHITE and on top of image */}
        <div className="relative z-20 pt-15 pb-7 flex justify-center">
          <Link to="/" className="flex justify-center items-center gap-2 font-medium text-xl tracking-wide">
            <img 
              src="/Vector.png" 
              alt="Auvra Logo" 
              className="w-6 h-6 object-contain brightness-0 invert" 
            />
            <span className="font-clash text-white">Auvra</span>
          </Link>
        </div>
        
        {/* Glassy Rectangle Overlay - Centered on image */}
        <div className="relative z-10 flex-1 flex items-center justify-center -mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-6 md:mx-12 p-8 md:p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/20 shadow-2xl"
          >
            {/* Title - Reduced size */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-clash font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            
            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                {post.subtitle}
              </p>
            )}
            
            {/* Author and Date with Calendar Icon */}
            <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
              <span className="font-medium">{post.author}</span>
              <span>•</span>
              <Calendar size={14} className="inline" />
              <span>{post.formattedDate}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* MAIN CONTENT - White background section */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph.trim()}
            </p>
          ))}
        </motion.div>
      </article>
    </div>
  );
}
