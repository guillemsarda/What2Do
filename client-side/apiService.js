const baseURL = "http://localhost:3000";

export const apiService = {};

apiService.signUp = (userInfo) => {
  return fetch(baseURL + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in signing up: \n${e}`));
};
