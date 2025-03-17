export const filterFileTypes = (
  files,
  allowedFileTypes
) => {
  if (!files) return { unwantedFiles: [], wantedFiles: [] };
  const unwantedFiles = [];
  const wantedFiles = [];
  for (const file of files) {
    console.log("file", file);
    if (allowedFileTypes.includes(file.type)) {
      wantedFiles.push(file);
    } else {
      unwantedFiles.push(file);
    }
  }
  return { unwantedFiles, wantedFiles };
};
