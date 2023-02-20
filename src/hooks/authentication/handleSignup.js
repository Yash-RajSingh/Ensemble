const HandleSignUp = async (
  username,
  email,
  password,
  sec_question,
  sec_answer
) => {
  const userData = {
    username,
    email,
    password,
    sec_question,
    sec_answer,
  };
  const BaseUrl = import.meta.env.VITE_APP_SIGNUP_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default HandleSignUp;
