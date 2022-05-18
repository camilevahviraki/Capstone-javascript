import displayMovies from './displayMovies';
import addLike from './addLikes';

let arr = [];
const fetchMovies = async () => {
  await fetch('https://api.tvmaze.com/shows?page=1')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      arr = response;
      displayMovies(arr);
    })
    .catch((err) => console.error(err));
};

export default fetchMovies;