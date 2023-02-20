const DeleteMember = async (uid, wuid, buid) => {
  const data = {
    uid,
    wuid,
    buid,
  };
  const BaseUrl = import.meta.env.VITE_APP_LEAVE_MEMBER_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "DELETE",
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

export default DeleteMember;
