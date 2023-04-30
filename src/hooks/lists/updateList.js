const UpdateList = async (title, user_id, board_id, list_id) => {
  const Data = {
    title,
    user_id,
    board_id,
    list_id,
  };
  const BaseUrl = import.meta.env.VITE_APP_UPDATE_LISTS_URL;
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

export default UpdateList;
