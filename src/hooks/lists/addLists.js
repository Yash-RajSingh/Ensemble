const AddList = async (user_id, title, board_id) => {
  const Data = {
    user_id,
    title,
    board_id,
  };
  const BaseUrl = import.meta.env.VITE_APP_ADD_LISTS_URL;
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

export default AddList;
