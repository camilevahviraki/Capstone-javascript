import LikeFeature from './likeMovie';
import addLike from './addLikes';
import HTMLElementCreator from './createHTMLElement';
import showMovieDetails from './showMovieDetails';
import getMovieLike from './geMovieLike';
import fetchComments from './fetchComments';
import countComments from './countComments';

const likeFunction = new LikeFeature();
const displayMovies = async (arrMovies) => {
  const fetchedLikes = await likeFunction.likesList();
  const MainContainer = document.getElementById('main');
  const AllMoviesPTag = document.getElementById('numberMovies');
  arrMovies.slice(0, 20).forEach(async (element, i) => {
    AllMoviesPTag.innerText = `[${i + 1}] Movies`;
    const imgLink = element.image.medium;
    const assingnId = () => {
      if (i % 2 === 0) {
        return 'orange';
      }
      if (i % 3 === 0) {
        return 'green';
      } if (i % 5 === 0 || i % 7 === 0) {
        return 'blue';
      }
      return undefined;
    };
    const comCount = await countComments(element.id);
    const movieItem = HTMLElementCreator
      .addElementText(`<img id="imgMovie${i}" src="${imgLink}" alt="" class="imgMovie" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
      <div class="movie-content">
      <h2 id="titleMovie${i}">${element.name}</h2>
      <div class="title-like">
      <div id="btnComment${i}"><i class="fa-solid fa-message"></i> ${comCount || 0} comments</div>
      <div class="like-wrapper">
      <i class="fa-solid fa-heart like" id="like${i}"></i>
      <p id="likesNum${i}">${getMovieLike(fetchedLikes, element.name)} likes</p></div>
      </div>
      </div>`)
      .addElement('div')
      .addAttributes({ id: assingnId() })
      .create();
    movieItem.classList.add('movie');
    movieItem.addEventListener('click', () => showMovieDetails(element));
    MainContainer.appendChild(movieItem);
  });
};

export default displayMovies;
