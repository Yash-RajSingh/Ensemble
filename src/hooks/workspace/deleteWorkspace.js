const DeleteWorkspace = async (uid, wuid) => {
  const Data = {
    uid,
    wuid,
  };
  const BaseUrl = import.meta.env.VITE_APP_DELETE_WORKSPACE_URL;
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

export default DeleteWorkspace;
