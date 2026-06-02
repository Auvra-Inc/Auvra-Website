import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Keep the ?raw query here to prevent the build error
const markdownFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', eager: true });

export default function Blog() {
  const navigate = useNavigate();  // ← ADDED this line
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

      // Extract filename/slug from the path
      const slug = path.split('/').pop().replace('.md', '');  // ← ADDED this line

      loadedPosts.push({
        id: path,
        slug: slug,  // ← ADDED this line
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

  // ← ADDED this function - handles clicking on a blog post
  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  // Split the subtitle text into words for animation
  const subtitleText = "From cultural discoveries to preserved legacies on Auvra";
  const words = subtitleText.split(" ");

  return (
    <div className="w-full bg-white pb-20">
      <Helmet>
        <title>Blog | Auvra - Cultural Discoveries & Preserved Legacies</title>
        <meta name="description" content="Explore Auvra's blog for cultural discoveries, preserved legacies, and authentic stories from around the world." />
        <link rel="canonical" href="https://www.goauvra.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goauvra.com/blog" />
        <meta property="og:title" content="Blog | Auvra - Cultural Discoveries & Preserved Legacies" />
        <meta property="og:description" content="Explore Auvra's blog for cultural discoveries, preserved legacies, and authentic stories from around the world." />
        <meta property="og:image" content="https://www.goauvra.com/og-image.png" />
        <meta property="og:site_name" content="Auvra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.goauvra.com/blog" />
        <meta name="twitter:title" content="Blog | Auvra - Cultural Discoveries & Preserved Legacies" />
        <meta name="twitter:description" content="Explore Auvra's blog for cultural discoveries, preserved legacies, and authentic stories from around the world." />
        <meta name="twitter:image" content="https://www.goauvra.com/og-image.png" />
      </Helmet>
      
      {/* Logo - restored to original position pt-15 pb-7 */}
      <Link to="/" className="pt-15 pb-7 flex justify-center items-center gap-2 font-medium text-xl tracking-wide text-gray-900 relative">
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
          <motion.h1 
            className="text-8xl md:text-9xl font-clash font-bold text-black tracking-wider mb-8 inline-block"
            animate={{
              letterSpacing: ["0.05em", "0.15em", "0.05em"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            Blog
          </motion.h1>
          
          {/* Word-by-Word Fade-in Animation for Subtitle */}
          <p className="text-2xl md:text-3xl font-clash font-medium text-black leading-tight max-w-sm">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + (i * 0.08),
                  ease: "easeOut"
                }}
                className="inline-block mr-2"
                whileHover={{ 
                  scale: 1.05, 
                  color: "#4b5563",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
              {currentPosts.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handlePostClick(post.slug)}  // ← ADDED this line
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Image aspect ratio - perfect square (1:1 ratio - 4x4) */}
                  <div className="w-full aspect-square overflow-hidden rounded-3xl mb-6 bg-gray-100 relative">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-clash font-semibold text-black leading-tight mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm font-clash font-normal text-gray-500">
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
