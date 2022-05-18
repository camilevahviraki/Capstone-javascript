import { result } from 'lodash';
import like from '../icons/kindpng_like.png';
import likeFeature from './likeMovie';
import addLike from './addLikes';

const likeFunction = new likeFeature();
const a = likeFunction.likesList();

const displayMovies = async (arrMovies) => {
  const MainContainer = document.getElementById('main');

  arrMovies.slice(0, 20).forEach(async (element, i) => {
    const imgLink = element.image.medium;
    const assingnId = () => {
      if (i % 2 === 0) {
        return 'orange';
      } if (i % 3 === 0) {
        return 'green';
      } if (i % 5 === 0 || i % 7 === 0) {
        return 'blue';
      } return undefined;
    };

    // const assignLikes = async () => {
    let array = [];
    let likesNum = 0;
    const a = await likeFunction.likesList().then((response) => {
      array = response;
      const likesNumber = array.filter((elmt) => elmt.item_id === element.name);
      if (likesNumber.length === 0) {
        likesNum = 0;
      } else { likesNum = likesNumber[0].likes; }

      MainContainer.innerHTML
        += `
             <div class="movie" id="${assingnId()}">
                 <img id="imgMovie${i}" src="${imgLink}" alt="" class="imgMovie"/>
                 <div class="title-like">
                    <h2>${element.name}</h2>
                    <img id="like${i}" src="${like}" alt="" class="like" 
                    onClick ="${likeFunction.likeMovie(element.name)}"/>
                     <p>${likesNum} likes</p>
                 </div>
                 <p>${element.premiered}  ${element.language}</p>
                 <a href="${element.officialSite}">Official Site</a>
                 <button id="btnComment${i}">comments</button>
                 <button id="reservation${i}">Add to card</button>
             </div>
        `;
    });

    // };

    //  await assignLikes();
  });
};

export default displayMovies;