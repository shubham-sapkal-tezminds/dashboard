import axios from "axios";
import { API_BASE_URL } from "../Config";

export const userApi = {
  signup: (firstname, lastname, email, password) => {
    return axios
      .post(`${API_BASE_URL}/signup`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((responce) => {
        const data = responce.data;
        console.log("respo", data);
        if (data.errorCode === 0) {
          alert(data.message);
        } else if (data.errorCode === 1) {
          alert(data.errorMessage);
        } else {
          alert("unable to sign up");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  },
  login: (email, password) => {
    return fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.errorCode === 0) {
          console.log(data.token);
          localStorage.setItem("authtoken", data.token);
          alert(data.message);
          window.location.href = "./dashboard";
        } else if (data.errorCode === 1) {
          alert(data.errorMessage);
        } else {
          alert("Unable to login, Unknown error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
