const AddBoard = async (title, description, creator_id, workspace_id) => {
  const Data = {
    title,
    description,
    workspace_id,
    creator_id,
  };
  const BaseUrl = import.meta.env.VITE_APP_ADD_BOARDS_URL;
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

export default AddBoard;
