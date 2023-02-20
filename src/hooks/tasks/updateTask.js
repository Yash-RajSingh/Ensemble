const UpdateTask = async (
  title,
  user_id,
  board_id,
  due_date_time,
  list_id,
  task_id,
  status
) => {
  const Data = {
    title,
    user_id,
    board_id,
    due_date_time,
    list_id,
    task_id,
    status,
  };
  const BaseUrl = import.meta.env.VITE_APP_UPDATE_TASK_URL;
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

export default UpdateTask;
