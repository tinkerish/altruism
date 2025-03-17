import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SortDropdown = ({ setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortDropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <div
      className="relative inline-block text-left max-md:w-full"
      ref={sortDropdownRef}
    >
      {/* Dropdown Button with Scale Effect */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="border border-white border-solid px-4 py-2 rounded-xl hover:bg-[#409097] transition-transform text-white text-xl max-md:w-full"
      >
        Sort By ▼
      </motion.button>

      {/* Dropdown Menu with Smooth Entry and Exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg max-md:w-full"
          >
            {["Date"].map((option) => (
              <motion.button
                key={option}
                whileHover={{ backgroundColor: "#f0f0f0" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSortBy(option.toLowerCase());
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2"
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortDropdown;
