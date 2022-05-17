import './styles/style.css';
import { result } from 'lodash';
import $ from 'jquery';
import wrapTemplate from './modules/wrapTemplate';
import fetchMovies from './modules/fetchAllMovies';
import likeMovie from './modules/likeMovie';

wrapTemplate();

fetchMovies();

likeMovie();