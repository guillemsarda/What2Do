const baseURL = ""

export const apiService = {};

apiService.signUp = (userInfo) => {
  return fetch(baseURL + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in signing up: \n${e}`));
};

apiService.signIn = (userInfo) => {
  return fetch(baseURL + '/user-login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in signing in: \n${e}`));
};

apiService.postEvent = (ev) => {
  return fetch(baseURL + '/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ev),
  })
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in posting the event: \n${e}`));
};

apiService.getEvents = (type) => {
  return fetch(baseURL + '/events/' + type)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((e) => console.log(`Error in getting the events: \n${e}`));
};
