import axios from "axios";
import { API_BASE_URL, AUTH_TOKEN } from "../Config/index";

export const api = {
  getAllUsers: async (
    start,
    limit,
    searchQuery,
    successCallback,
    errorCallback
  ) => {
    try {
      // console.log(searchQuery)
      const response = await axios.get(
        `${API_BASE_URL}/users?start=${start}&limit=${limit}&search=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      successCallback(data.data);
    } catch (error) {
      errorCallback(error);
    }
  },

  login: async (username, password, successCallback, errorCallback) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        errorCallback(new Error(data.errorMessage));
      } else {
        const data = await response.json();
        alert(data.responseMessage);
        successCallback(data.token);
      }
    } catch (error) {
      errorCallback(error);
    }
  },
};
