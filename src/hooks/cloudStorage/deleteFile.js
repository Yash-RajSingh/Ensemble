const DeleteFile = async (uid, buid, fileName) => {
  try {
    const request = await fetch(import.meta.env.VITE_APP_DELETE_FILES_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
        buid,
        file_name: fileName,
      }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default DeleteFile;
