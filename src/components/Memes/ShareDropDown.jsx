import { motion, AnimatePresence } from "framer-motion";

const ShareDropdown = ({ handleSharing, isOpen, close }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg max-md:w-full"
        >
          {["Copy Link", "Facebook", "Whatsapp", "LinkedIn"].map((option) => (
            <motion.button
              key={option}
              whileHover={{ backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log("hey");
                handleSharing();
                close(false);
              }}
              className="block w-full text-left px-4 py-2"
            >
              {option}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareDropdown;
