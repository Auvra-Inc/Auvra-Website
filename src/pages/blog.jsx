import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Ensure lucide-react is installed

export default function Blog() {
  // Placeholder data - swap the images and text when you are ready!
  const posts = [
    {
      id: 1,
      title: "Auvra is now Live",
      date: "Jan 07, 2026",
      // Using a premium Unsplash placeholder to match your red landscape image
      imageUrl: "/fig3.png"
    },
    {
      id: 2,
      title: "Jagged Intelligence: The BOOP Illusion",
      date: "Jan 05, 2026",
      // Using an abstract blue placeholder to match your second image
      imageUrl: "fig2.png"
    },
    {
      id: 3,
      title: "Jagged Intelligence: The BOOP Illusion",
      date: "Jan 02, 2026",
      // Using a landscape placeholder to match your third image
      imageUrl: "fig1.png"
    }
  ];

  return (
    <div className="w-full bg-white pt-32 pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Massive Blog Header */}
          <h1 className="text-7xl md:text-9xl font-clash font-bold text-black tracking-tighter mb-6">
            Blog
          </h1>
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-clash font-medium text-black leading-tight max-w-sm">
            From cultural discoveries to preserved legacies on Auvra
          </p>
        </motion.div>
      </section>

      {/* 2. BLOG POSTS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
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
              {/* Image Container with heavy rounded corners */}
              <div className="w-full aspect-[4/3] md:aspect-[4/4] overflow-hidden rounded-[2rem] mb-6 bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Post Details */}
              <h2 className="text-2xl md:text-3xl font-clash font-semibold text-black leading-tight mb-2 group-hover:text-gray-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-sm font-sans font-medium text-gray-400 uppercase tracking-wider">
                {post.date}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PAGINATION SECTION */}
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

    </div>
  );
}