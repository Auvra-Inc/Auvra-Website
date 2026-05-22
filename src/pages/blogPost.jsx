// src/pages/blogPost.jsx - NO NEW PACKAGES NEEDED
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        
        // Improved formatting - handles emails, bold, italic, links properly
        mainContent = mainContent
          // First protect email addresses from being treated as markdown
          .replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1" class="text-blue-600 underline break-all">$1</a>')
          // Bold **text**
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-black">$1</strong>')
          // Italic *text* (but not email addresses)
          .replace(/(?<!\w)\*(?!\s)(.*?)(?<!\s)\*(?!\w)/g, '<em class="italic">$1</em>')
          // Links [text](url)
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline break-all">$1</a>')
          // Handle line breaks - convert double newlines to paragraph breaks
          .split('\n\n').map(para => {
            // Skip empty paragraphs
            if (!para.trim()) return '';
            // Check if it's already wrapped in HTML
            if (para.trim().startsWith('<')) return para;
            // Wrap in paragraph tag
            return `<p class="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">${para.replace(/\n/g, '<br/>')}</p>`;
          }).join('');
        
        // Handle single line breaks within paragraphs
        mainContent = mainContent.replace(/<p>(.*?)<\/p>/g, (match, content) => {
          const withBreaks = content.replace(/<br\/>/g, '\n').split('\n').map(line => {
            if (line.trim().startsWith('<')) return line;
            return line.trim();
          }).join(' ');
          return `<p class="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">${withBreaks}</p>`;
        });
        
        // Handle unordered lists
        mainContent = mainContent.replace(/<p>(?:•|\-|\*)\s+(.*?)<\/p>/g, (match, content) => {
          return `<li class="text-gray-600 leading-relaxed mb-2 text-base md:text-lg ml-6">• ${content}</li>`;
        });
        
        // Group list items together
        mainContent = mainContent.replace(/(<li.*?<\/li>)/gs, (match) => {
          return `<ul class="list-disc pl-6 mb-6 space-y-2">${match}</ul>`;
        });
        
        // Fix duplicate ul wrapping
        mainContent = mainContent.replace(/<ul>(<ul>)/g, '<ul>');
        mainContent = mainContent.replace(/<\/ul>(<\/ul>)/g, '</ul>');
        
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
      {/* HERO SECTION */}
      <div className="relative w-full h-screen max-h-[100vh] overflow-hidden">
        
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
          
          <div className="flex-1 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-6 md:mx-12 p-8 md:p-12 rounded-3xl backdrop-blur-md bg-black/30 border border-white/20 shadow-2xl"
            >
              <div className="mb-6">
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
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
      
      {/* MAIN CONTENT - Wider text container for better stretching */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="blog-content w-full"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
