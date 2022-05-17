import './styles/style.css';
import { result } from 'lodash';
import $ from 'jquery';

const fetchMovies = async () => {
  await fetch('https://api.tvmaze.com/shows?page=1')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));
};

fetchMovies();

const createId = async () => {
  try {
    const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/likes/',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ item_id: 'movie1' }),
      });
  
    const data = await postLike.text();

    console.log(data);
  } catch (e) {
    console.log(e);
  }

  // ((value) => value.json())
  //  .then((data) => console.log(data))
  //  .catch((error) => console.log(error))
};

// createId();

document.addEventListener('DOMContentLoaded', async () => {
  await createId();
});

// $.post("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/likes/",
//  {"item_id": "movie1"},
// (result) => {
//   console.log(result);
// });