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
