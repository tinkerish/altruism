import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pikachu from "../assets/pikachu.jpg";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      {/* Glitching 404 */}
      <motion.h1
        className="text-7xl font-extrabold relative text-red-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
        <span className="absolute left-0 top-0 text-blue-500 animate-pulse blur-sm">
          404
        </span>
        <span className="absolute left-0 top-0 text-green-500 animate-blink blur-sm">
          404
        </span>
      </motion.h1>

      <motion.h2
        className="text-2xl mt-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Lost in the EventVerse 🤯
      </motion.h2>

      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        You were looking for events, but all we found was this void...
      </motion.p>

      <motion.img
        src={pikachu}
        alt="Confused Pikachu"
        className="mt-6 rounded-lg shadow-lg w-[30%] min-w-[200px]"
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        whileHover={{
          rotate: [0, -2, 2, -2, 0],
          transition: { repeat: Infinity, duration: 0.3 },
        }}
      />

      <motion.div className="mt-8 space-x-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Back to Events 🚀
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
