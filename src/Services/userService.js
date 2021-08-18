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
export const register = async (first_name, last_name, email, password, pin) => {
  const url = "https://biller-app-api.herokuapp.com/api/biller/signup";
  const data = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    pin: pin,
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
