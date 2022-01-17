const baseURL = "http://192.168.1.232:3000"; /*"http://192.168.0.93:3000";*/ //Casa IP Address

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

apiService.signIn = (userInfo) => {
  return fetch(baseURL + "/user-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in signing in: \n${e}`));
};
