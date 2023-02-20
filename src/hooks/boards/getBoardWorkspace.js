const GetBoardWorkspace = async (uid, buid) => {
  const data = {
    uid,
  };
  const BaseUrl = import.meta.env.VITE_APP_GET_ALL_BOARD;
  try {
    const request = await fetch(BaseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default GetBoardWorkspace;
