const GetMember = async (uid, buid) => {
  const data = {
    uid,
    buid,
  };
  const BaseUrl = import.meta.env.VITE_APP_GET_MEMBER_URL;
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

export default GetMember;
