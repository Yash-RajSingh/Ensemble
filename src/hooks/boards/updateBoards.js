const UpdateBoard = async (buid, uid, title, description) => {
  const Data = {
    buid,
    uid,
    title,
    description,
  };
  const BaseUrl = import.meta.env.VITE_APP_UPDATE_BOARDS_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default UpdateBoard;
