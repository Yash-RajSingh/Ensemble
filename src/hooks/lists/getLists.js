const GetListsAndTasks = async (user_id, board_id) => {
  const data = {
    user_id,
    board_id,
  };
  const BaseUrl = import.meta.env.VITE_APP_GET_LISTS_AND_TASK_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default GetListsAndTasks;
