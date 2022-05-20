import _ from 'lodash';
import './styles/style.css';
import wrapTemplate from './modules/wrapTemplate';
import fetchMovies from './modules/fetchAllMovies';
import addLike from './modules/addLikes';

const wrapFunctions = async () => {
  await wrapTemplate();

  await fetchMovies();
};

wrapFunctions();

const titleMovie = document.getElementById('main');
titleMovie.addEventListener('click', () => {
  addLike();
});
