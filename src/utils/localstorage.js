export const getToken = () => {
    return localStorage.getItem("access_token");
  };
  export const setToken = (token) => {
    localStorage.setItem("access_token", token);
  };