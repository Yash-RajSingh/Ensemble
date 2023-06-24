const GetFiles = async (uid, buid) => {
  try {
    const request = await fetch(import.meta.env.VITE_APP_GET_FILES_URL, {
      method: "GET",
      headers: {
        uid,
        buid,
      },
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default GetFiles;
