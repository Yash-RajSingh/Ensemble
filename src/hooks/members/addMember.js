const AddMember = async (email, uid, wuid, buid) => {
  const data = {
    email,
    uid,
    wuid,
    buid,
  };
  const BaseUrl = import.meta.env.VITE_APP_ADD_MEMBER_URL;
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

export default AddMember;
