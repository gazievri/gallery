import { BASE_URL } from "./config";

const getPaintings = () => {
  return fetch(`${BASE_URL}/paintings`, {
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

export {getPaintings};
