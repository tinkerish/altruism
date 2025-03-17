import { useState } from "react";
import fileUpload from "../assets/upload.png";
import "../styles/fileUpload.css";

const FileUploader = ({
  allowedFileTypes,
  allowedFileSize,
  additionalNotes,
  isDisabled,
  onChange,
}) => {
  const [isDragZoneActive, setIsDragZoneActive] = useState(false);
  // const [errors, setErrors] = useState<fileValidationError | null>(null);
  const fileChangeHandler = async (file) => {
    // setErrors(null);
    if (!file) return;
    onChange(file);
  };
  const handleChange = (e) => {
    console.log(e.target.files);
    if (e.target.files === null) return;
    fileChangeHandler(e.target.files[0]);
  };
  const handleDrop = (e) => {
    if (e.dataTransfer.files === null) return;
    fileChangeHandler(e.dataTransfer.files[0]);
    setIsDragZoneActive(false);
  };
  const handleDragEnter = () => {
    setIsDragZoneActive(true);
  };
  return (
    <div
      className={
        isDisabled
          ? "cursor-not-allowed flex flex-col gap-4"
          : "flex flex-col gap-4"
      }
    >
      <div
        tabIndex={0}
        role="button"
        aria-label="Drag and drop area for file upload"
        aria-describedby="file-upload-instructions"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            document.getElementById("file-upload")?.click();
          }
        }}
        style={{
          pointerEvents: isDisabled ? "none" : "auto",
        }}
        className={` ${
          isDragZoneActive ? "bg-gray-200 opacity-50" : ""
        } foccusable border-[2px] border-dashed border-gray-500 px-8 py-4 text-center rounded flex items-center justify-center flex-col relative gap-1`}
      >
        <label htmlFor="file-upload" hidden>
          Upload File
        </label>
        <input
          type="file"
          name=""
          id="file-upload"
          multiple={false}
          className={`absolute w-full h-full opacity-0`}
          onDrop={handleDrop}
          onChange={handleChange}
          onDragEnter={handleDragEnter}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragZoneActive(false);
          }}
        />
        <img
          src={fileUpload}
          alt="file upload icon"
          className={`w-[4rem] pointer-events-none
            ${isDragZoneActive ? "scale-[0.9]" : ""}
            `}
        />
        <p
          id="file-upload-instructions"
          className={`text-xl pointer-events-none ${
            isDragZoneActive ? "scale-[0.9]" : ""
          }`}
        >
          Drag & Drop files of click to upload
        </p>
        {additionalNotes && (
          <p
            className={`text-sm text-gray-500 pointer-events-none ${
              isDragZoneActive ? "scale-[0.9]" : ""
            }`}
          >
            {additionalNotes}
          </p>
        )}
        <p
          className={`text-[#4883e7] pointer-events-none ${
            isDragZoneActive ? "scale-[0.9]" : ""
          }`}
        >
          Only {allowedFileTypes.join(", ")} with total max size of{" "}
          {allowedFileSize}.
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
