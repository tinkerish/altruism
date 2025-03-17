import axios from "axios";
const UPLOAD_IMAGE_API = import.meta.env.VITE_UPLOAD_IMAGE_API;
const GENERATE_IMAGE_API = import.meta.env.VITE_GENERATE_IMAGE_API;
export const generateAiMeme = async (
  templateId,
  text0,
  text1
) => {
  if (!templateId || !text0 || !text1) return;
  const resp = await axios.post(GENERATE_IMAGE_API, {
    templateId: templateId,
    text0: text0,
    text1: text1,
  });
  return resp.data.memeUrl;
};

export const generateMeme = async (file) => {
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);
  const resp = await axios.post(UPLOAD_IMAGE_API, formData);
  return resp.data.imageUrl.data.url;
};
