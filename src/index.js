import _ from 'lodash';
import './styles/style.css';
import wrapTemplate from './modules/wrapTemplate.js';
import fetchMovies from './modules/fetchAllMovies.js';
import addLike from './modules/addLikes.js';

const wrapFunctions = async () => {
  await wrapTemplate();

  await fetchMovies();
};

wrapFunctions();

const titleMovie = document.getElementById('main');
titleMovie.addEventListener('click', () => {
  addLike();
});
