// resources/js/Components/App.js
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-blue-500">
                <motion.div
                    className="bg-white p-4 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    variants={{
                        animate: { opacity: 1 },
                        initial: { opacity: 0 },
                    }}
                >
                    <h1 className="text-white text-4xl font-bold">
                        Welcome to My App
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

export default App;
