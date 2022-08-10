import { BASE_URL } from "./config";

const getPaintings = (key = '') => {
  return fetch(`${BASE_URL}/paintings?_limit=12${key}`, {
    method: 'GET',
})
  .then(checkResponse);
}

const getAuthors = () => {
  return fetch(`${BASE_URL}/authors`, {
    method: 'GET',
})
  .then(checkResponse);
}

const getLocations = () => {
  return fetch(`${BASE_URL}/locations`, {
    method: 'GET',
})
  .then(checkResponse);
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export { getPaintings, getAuthors, getLocations };
