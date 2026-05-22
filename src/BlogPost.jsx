// BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BlogPost() {
  // Get the blog post slug from the URL (e.g., "auvra-is-now-live")
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
        
        setPost({
          title: clean(titleMatch) || "Untitled",
          date: clean(dateMatch) || "Recently Published",
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
      {/* Logo Header - Same as blog page */}
      <Link to="/" className="pt-15 pb-7 flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-gray-900">
        <img 
          src="/Vector .png" 
          alt="Auvra Logo" 
          className="w-6 h-6 object-contain" 
        />
        <span className="font-clash">Auvra</span>
      </Link>
      
      {/* Blog Post Content - Centered like your screenshot */}
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-8">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold text-black leading-tight mb-4"
        >
          {post.title}
        </motion.h1>
        
        {/* Subtitle */}
        {post.subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-6"
          >
            {post.subtitle}
          </motion.p>
        )}
        
        {/* Author and Date */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 text-gray-500 mb-12 pb-8 border-b border-gray-100"
        >
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </motion.div>
        
        {/* Featured Image */}
        {post.imageUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden mb-12 bg-gray-100"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
        
        {/* Main Content - Formatted as paragraphs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
