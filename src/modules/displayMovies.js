import like from '../icons/kindpng_like.png';
import HTMLElementCreator from './createHTMLElement';
import showMovieDetails from './showMovieDetails';

const displayMovies = (arrMovies) => {
  const MainContainer = document.getElementById('main');

  arrMovies.slice(0, 20).forEach((element, i) => {
    const imgLink = element.image.medium;
    const assingnId = () => {
      if (i % 2 === 0) {
        return 'orange';
      }
      if (i % 3 === 0) {
        return 'green';
      }
      if (i % 5 === 0) {
        return 'blue';
      }
      return undefined;
    };

    const movieItem = HTMLElementCreator
      .addElementText(`<img id="imgMovie${i}" src="${imgLink}" alt="" class="imgMovie" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
      <div class="movie-content">
      <h2>${element.name}</h2>
      <div class="title-like">
      <p><i class="fa-solid fa-heart"></i> ${i} likes</p>
      </div>
      <div class="m-btn-container"> 
      <button id="btnComment${i}"><i class="fa-solid fa-message"></i> comments</button>
      <button id="reservation${i}"><i class="fa-solid fa-cart-arrow-down"></i> Add to card</button></div>
      </div>`)
      .addElement('div')
      .addAttributes({ id: assingnId() })
      .addClasses('movie')
      .addEvent(() => showMovieDetails(element))
      .create();

    MainContainer.appendChild(movieItem);
  });
};

export default displayMovies;
