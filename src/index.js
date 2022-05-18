import './styles/style.css';
import { result } from 'lodash';
import $ from 'jquery';
import wrapTemplate from './modules/wrapTemplate';
import fetchMovies from './modules/fetchAllMovies';
import likeFeature from './modules/likeMovie';
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

const likeBtn = document.querySelectorAll('.like');

likeBtn.forEach((a, i) => {
  document.getElementById(`like${i}`).addEventListener('click', () => {
    // const titleMovie = document.getElementById(`titleMovie${i}`).textContent;
    console.log(i, 'cliked');
    // likeFunction.likeMovie('movieMovie');
  });
});

const likeX = new likeFeature();
console.log(likeX.arrListW());