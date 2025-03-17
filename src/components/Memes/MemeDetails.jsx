import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import useMemeStore from "../../store/formStore";
import { useParams } from "react-router-dom";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";

const MemeDetail = ({ newMeme }) => {
  const { id } = useParams();
  const { addUserMeme, memes } = useMemeStore();
  const [isUploaded, setIsUploaded] = useState(false);

  const displayMeme = useMemo(() => {
    return memes.find((meme) => meme.id === id);
  }, [memes, id]);

  const handleAddMeme = () => {
    addUserMeme(newMeme);
    setIsUploaded(true);
  };

  return (
    <motion.div
      className="flex flex-col items-center w-[100%] max-lg:w-[95%] p-16 max-lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col justify-center w-[60%] max-lg:w-[100%] bg-white rounded-xl p-4 gap-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="w-full relative">
          <motion.img
            src={id ? displayMeme?.url : newMeme?.url}
            alt={id ? displayMeme?.name : newMeme?.name}
            className="aspect-[18/9] w-full object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="flex items-end justify-end p-4 absolute right-0 bottom-0 z-10 gap-1 text-white w-full h-full shadow-[inset_0px_0px_100px_25px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xl">
              <BsCalendar2DateFill />
              <p>
                {displayMeme
                  ? new Date(displayMeme.date).toLocaleDateString()
                  : newMeme && newMeme.date
                  ? new Date(newMeme.date).toLocaleDateString()
                  : "Date"}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-left">
            {id ? displayMeme?.name : newMeme?.name}
          </h1>
          <span className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
            {id ? displayMeme?.category : newMeme?.category}
          </span>
        </div>
        <div className="">
          <p>{id ? displayMeme?.description : newMeme?.description}</p>
        </div>
        {isUploaded ? (
          <motion.div
            className="w-full flex items-center gap-1 justify-center p-4 text-3xl text-green-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MdOutlineDoneOutline />
            Uploaded
          </motion.div>
        ) : (
          !id && (
            <motion.button
              className="bg-blue-500 text-white p-4 rounded-r hover:bg-blue-600 w-full"
              onClick={handleAddMeme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upload Event
            </motion.button>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default MemeDetail;
