const DeleteTask = async (user_id, board_id, list_id, task_id) => {
  const Data = {
    user_id,
    board_id,
    list_id,
    task_id,
  };
  const BaseUrl = import.meta.env.VITE_APP_DELETE_TASK_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "DELETE",
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

export default DeleteTask;
