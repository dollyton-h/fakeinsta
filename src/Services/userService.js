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

export const postingPhoto = async (description, file) => {
  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  formData.append("image", fileField.files[0]);
  formData.append("description", description);

  const url = `https://fakes-insta.herokuapp.com/api/fakeInsta/posting/create`;

  try {
    const store = window.localStorage;
    const token = store.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    console.log(file, "ufufufufu");
    return response.json();
  } catch (error) {
    throw error;
  }
};
