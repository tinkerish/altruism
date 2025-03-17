import React, { useEffect, useState } from "react";
import Select from "../Select";
import Error from "../Error";
import FileUploader from "../FileUploader";
import CustomToggle from "../CustomToggle";
import useMemeStore from "../../store/formStore";
import { v4 as uuid } from "uuid";
import { generateAiMeme, generateMeme } from "../../utils/memeUploader";
import { Loader } from "../Loader";
import { MdOutlineDoneOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { RiImageAiFill } from "react-icons/ri";
import events from "../../assets/events.jpg";
import SearchableDropdown from "../SearchableDropdown";
const CATEGORY_OPTIONS = [
  {
    value: "Religious",
    name: "Religious",
  },
  {
    value: "Social",
    name: "Social",
  },
  {
    value: "Charity",
    name: "Charity",
  },
];
const MAX_SIZE = "5 MB";
const FILE_TYPE = ["image/jpeg", "image/jpg", "image/png"];

const Step1 = ({ handleMemeData }) => {
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [dateError, setDateError] = useState();
  const [locationError, setLocationError] = useState();
  const [imageError, setImageError] = useState();
  // const [templateIdError, setTemplateIdError] = useState();
  const [urlError, setUrlError] = useState();
  const { memes } = useMemeStore();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0].value);
  const [endLoadingState, setEndLoadingState] = useState(false);
  const [locations, setLocations] = useState([]);
  const [selectedLocaton, setSelectedLocation] = useState();
  const handleFileChange = async (e) => {
    e.preventDefault();
    let isValid = true;
    setUrlError(undefined);
    setNameError(undefined);
    setDescriptionError(undefined);
    setImageError(undefined);
    setDateError(undefined);
    setLocationError(undefined);

    if (!name) {
      setNameError("Title is required.");
      isValid = false;
    }

    if (!description) {
      setDescriptionError("Description is required.");
      isValid = false;
    }

    if (!image) {
      setImageError("Image is required.");
      isValid = false;
    }
    if (image && !FILE_TYPE.includes(image.type)) {
      setImageError(
        "Invalid file type. Only JPG, JPEG,GIF, and PNG are allowed."
      );
      isValid = false;
    }

    if (!date) {
      setDateError("Please select a date for the event.");
      isValid = false;
    }
    if (!selectedLocaton) {
      setLocationError("Please select a location for the event");
    }
    if (!isValid) return;
    const id = uuid();
    const event = {
      id,
      name,
      description,
      location: selectedLocaton,
      date,
      category,
      url: "",
    };
    try {
      setLoading(true);
      event.url = await generateMeme(image);
    } catch (error) {
      console.log(error);
    } finally {
      setEndLoadingState(true);

      setTimeout(() => {
        setEndLoadingState(false);
        setLoading(false);
      }, 1000);
    }
    if (!event.url) {
      setUrlError(
        "Something went wrong while uploading image file. Please try again"
      );
      return;
    }
    handleMemeData(event);
  };
  return (
    <div className="flex justify-around w-full max-sm:flex-col-reverse max-sm:gap-8">
      <div className="w-[47%] flex flex-col justify-between max-sm:w-full">
        <div className="flex flex-col justify-evenly w-full gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="coverImage" className="md:text-lg">
              Cover Image
            </label>
            <FileUploader
              value={image}
              allowedFileSize={MAX_SIZE}
              allowedFileTypes={FILE_TYPE}
              maxFiles={1}
              onChange={(file) => {
                setImageError(undefined);
                setImage(file);
              }}
            />
            {image && <RiImageAiFill size={30} />}
            {imageError && <Error errorMessage={imageError} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="">
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setNameError(undefined);
                setName(e.target.value);
              }}
              className="w-full border border-gray-300 p-1 rounded-lg"
            />
            {nameError && <Error errorMessage={nameError} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => {
                setDescriptionError(undefined);
                setDescription(e.target.value);
              }}
              className={` w-full border border-gray-300 p-1 rounded-lg`}
            />
            {descriptionError && <Error errorMessage={descriptionError} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => {
                setDateError(undefined);
                setDate(e.target.value);
              }}
              className={` w-full border border-gray-300 p-1 rounded-lg`}
            />
            {dateError && <Error errorMessage={dateError} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location" className="">
              Location
            </label>
            <SearchableDropdown
              options={locations}
              label="Location"
              id="location"
              selectedVal={selectedLocaton}
              handleOptionsChange={(val) => {
                setLocationError(undefined);
                setLocations(val);
              }}
              handleChange={(val) => {
                setLocationError(undefined);
                setSelectedLocation(val);
              }}
            />
            {locationError && <Error errorMessage={locationError} />}
          </div>
          <div className="flex flex-col gap-1">
            <Select
              label="Category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              options={CATEGORY_OPTIONS}
              value={category}
              className="flex flex-col gap-1"
              inputClassName="focus:outline-gray-500 md:p-[0.4rem] rounded-lg border border-solid border-gray-400 rounded-lg"
              labelClassName="md:text-lg"
            />
          </div>
          <motion.button
            className={`flex items-center justify-center mt-8 w-full bg-[#409097] rounded-md py-2 text-white text-xl ${
              loading ? "cursor-not-allowed bg-[#4aa7af]" : ""
            }`}
            disabled={loading}
            onClick={(e) => handleFileChange(e)}
            transition={{ duration: 0.1 }}
          >
            {endLoadingState ? (
              <MdOutlineDoneOutline />
            ) : loading ? (
              <div>
                <Loader />
              </div>
            ) : (
              "Add Event"
            )}
          </motion.button>
          {urlError && <Error errorMessage={urlError} />}
        </div>
      </div>
      <motion.div
        className="p-4  rounded w-[50%] max-sm:w-full"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.img
          src={events}
          alt={events}
          className={`w-full object-cover aspect-square rounded-md border border-solid border-black`}
          role="presentation"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
};

export default Step1;
