import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Keep the ?raw query here to prevent the build error
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
        imageUrl: image || "/art3.png",
        rawDate: rawDate // Keep raw date for sorting
      });
    }

    // Sort: Newest to Oldest using rawDate string
    loadedPosts.sort((a, b) => {
      if (!a.rawDate && !b.rawDate) return 0;
      if (!a.rawDate) return 1;
      if (!b.rawDate) return -1;
      return new Date(b.rawDate) - new Date(a.rawDate);
    });
    
    setPosts(loadedPosts);
    setCurrentPage(1);
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white pb-20">
      <Link to="/" className="pt-15 pb-7 flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-gray-900 relative">
        <img 
          src="/Vector .png" 
          alt="Auvra Logo" 
          className="w-6 h-6 object-contain" 
        />
        <span className="font-clash">Auvra</span>
      </Link>
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-clash font-bold text-black tracking-tighter mb-6 leading-[1.1]">
            Blog
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-clash font-medium text-black leading-tight max-w-md">
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {currentPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Fixed aspect ratio - not too tall, balanced 4:3 on mobile, 3:4 on desktop */}
                  <div className="w-full aspect-[4/3] md:aspect-[3/4] overflow-hidden rounded-3xl mb-6 bg-gray-100 relative">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-clash font-semibold text-black leading-tight mb-2 group-hover:text-gray-600 transition-colors duration-300 tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-xs md:text-sm font-clash font-medium text-gray-400 uppercase tracking-wider">
                    {post.date}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* PAGINATION SECTION - Shows when more than 6 posts */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-end">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full text-gray-400 hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
                    aria-label="Previous page"
                  >
                    <ChevronLeft strokeWidth={1.5} size={28} />
                  </button>
                  <span className="text-sm font-medium text-gray-500 px-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button 
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full text-gray-400 hover:text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50"
                    aria-label="Next page"
                  >
                    <ChevronRight strokeWidth={1.5} size={28} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
