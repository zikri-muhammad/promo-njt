// resources/js/Components/App.js
import React from "react";
import { motion } from "framer-motion"; // Mengimpor motion dari framer-motion

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-blue-500 p-4 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        variants={{
          animate: { opacity: 1 },
          initial: { opacity: 0 }
        }}
      >
        <motion.h1 
          className="text-white text-3xl" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }}
        >
          Hello,
        </motion.h1>
        <motion.h2 
          className="text-white text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          React with Tailwind & Framer Motion!
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default App;
