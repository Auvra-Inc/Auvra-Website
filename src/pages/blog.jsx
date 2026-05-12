import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Keep the ?raw query here to prevent the build error
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadedPosts = [];
    
    for (const path in markdownFiles) {
      // 1. Get the raw string content of the file
      const rawContent = markdownFiles[path].default || markdownFiles[path];

      // 2. Improved Search Patterns (Regex) to find the Title, Date, and Image
      // These look for the word, then the colon, then whatever text follows
      const titleMatch = rawContent.match(/title:\s*(.*)/i);
      const dateMatch = rawContent.match(/date:\s*(.*)/i);
      const imageMatch = rawContent.match(/image:\s*(.*)/i);

      // 3. Clean up the results (remove quotes if they exist)
      const clean = (match) => match ? match[1].replace(/['"]/g, '').trim() : null;

      const title = clean(titleMatch);
      const rawDate = clean(dateMatch);
      const image = clean(imageMatch);

      loadedPosts.push({
        id: path,
        title: title || "Untitled Post",
        // Only format the date if we actually found one
        date: rawDate 
          ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) 
          : "Recently Published",
        imageUrl: image || "/art3.png" 
      });
    }

    // Sort: Newest to Oldest
    loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(loadedPosts);
  }, []);

  return (
    <div className="w-full bg-white pb-20">
      <Link to="/" className="pt-8 pb-7 flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-gray-900 relative">
        <img 
          src="/Vector .png" 
          alt="Auvra Logo" 
          className="w-6 h-6 object-contain" 
        />
        <span className="font-clash">Auvra</span>
      </Link>
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-clash font-bold text-black tracking-tighter mb-6">
            Blog
          </h1>
          <p className="text-2xl md:text-3xl font-clash font-medium text-black leading-tight max-w-sm">
            From cultural discoveries to preserved legacies on Auvra
          </p>
        </motion.div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {posts.length === 0 ? (
          <div className="w-full py-20 text-center font-clash text-gray-400 text-xl">
            No articles published yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/3] md:aspect-[4/4] overflow-hidden rounded-[2rem] mb-6 bg-gray-100 relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-clash font-semibold text-black leading-tight mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-sm font-clash font-medium text-gray-400 uppercase tracking-wider">
                  {post.date}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* PAGINATION SECTION (Hidden if few posts) */}
      {posts.length > 3 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 flex justify-end">
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-black transition-colors disabled:opacity-30">
              <ChevronLeft strokeWidth={1.5} size={28} />
            </button>
            <button className="p-2 text-gray-400 hover:text-black transition-colors">
              <ChevronRight strokeWidth={1.5} size={28} />
            </button>
          </div>
        </section>
      )}

    </div>
  );
}