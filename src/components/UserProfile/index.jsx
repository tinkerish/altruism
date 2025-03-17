import { useMemo, useState } from "react";
import UserMemes from "../UserProfile/UserMemes";
import LikedMemes from "./LikedMemes";
import { Tabs } from "../Tabs";
import { RiEditCircleFill } from "react-icons/ri";
import { generateMeme as uploadFile } from "../../utils/memeUploader";
import { motion } from "framer-motion";
const UserProfile = ({ likedMemes, userMeme, user, updateProfile }) => {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);

  const tabChangeHandler = (index) => {
    setTab(index);
  };

  const tabs = useMemo(() => {
    return [
      {
        title: "User Memes",
        component: UserMemes,
        props: {
          id: "tabpanel",
          ariaLabelledBy: "tab",
          memes: userMeme,
        },
      },
      {
        title: "Liked Memes",
        component: LikedMemes,
        props: { id: "tabpanel", ariaLabelledBy: "tab", memes: likedMemes },
      },
    ];
  }, [likedMemes, userMeme]);

  const handleFileChange = async (e) => {
    if (!e.target.files) return;
    setLoading(true);
    const url = await uploadFile(e.target.files[0]);
    if (url) {
      updateProfile({ [e.target.name]: url });
    }
    setLoading(false);
  };

  return (
    <motion.div className="flex flex-col items-center w-[70%] p-16 max-lg:w-[100%] max-lg:p-8">
      <div className="w-full bg-white rounded-xl">
        <div className="p-8 flex flex-col items-center justify-center w-full gap-4">
          <motion.div
            className="relative w-fit"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? (
              <div className="file-loader"></div>
            ) : (
              <motion.img
                src={user.image}
                alt="Profile Image"
                className="w-48 h-48 rounded-full object-cover border-8 border-solid border-[#0000004d]"
              />
            )}

            <label className="absolute right-2 top-2">
              <motion.div
                className="w-fit bg-black rounded-xl p-1"
                whileHover={{ scale: 1.1 }}
              >
                <RiEditCircleFill
                  className={`text-3xl ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  color="white"
                />
              </motion.div>
              <input
                type="file"
                name="image"
                disabled={loading}
                onChange={handleFileChange}
                className="absolute w-full h-full top-0 left-0 right-0 bottom-0 opacity-0 -z-10"
              />
            </label>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block mb-2 text-xl">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => {
                updateProfile({ [e.target.name]: e.target.value });
              }}
              className="border p-2 w-full"
              disabled={loading}
            />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block mb-2 text-xl">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={(e) => {
                updateProfile({ [e.target.name]: e.target.value });
              }}
              className={`border p-2 w-full ${
                loading ? "cursor-not-allowed" : ""
              }`}
              disabled={loading}
            />
          </motion.div>
        </div>
        <div className="w-full rounded-xl">
          <Tabs value={tab} onChange={tabChangeHandler} tabs={tabs} />
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
