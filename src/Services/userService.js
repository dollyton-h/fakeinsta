export const login = async (email, password) => {
  const url = "https://fakes-insta.herokuapp.com/api/fakeInsta/login";
  const data = {
    email,
    password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
export const register = async (email, username, password) => {
  const url = "https://fakes-insta.herokuapp.com/api/fakeInsta/register";
  const data = {
    email: email,
    username: username,
    password: password,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
