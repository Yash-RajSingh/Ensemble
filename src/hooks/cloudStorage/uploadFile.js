const UploadFile = async (uid, buid, file) => {
  var formdata = new FormData();
  formdata.append("file", file, file.name);
  try {
    const request = await fetch(import.meta.env.VITE_APP_ADD_FILES_URL, {
      method: "POST",
      headers: {
        uid,
        buid,
      },
      body: formdata,
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default UploadFile;
