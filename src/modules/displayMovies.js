import like from '../icons/kindpng_like.png';

const displayMovies = (arrMovies) => {
  const MainContainer = document.getElementById('main');

  arrMovies.slice(0, 20).forEach((element, i) => {
    const imgLink = element.image.medium;
    const assingnId = () => {
      if (i % 2 === 0) {
        return 'orange';
      } if (i % 3 === 0) {
        return 'green';
      } if (i % 5 === 0) {
        return 'blue';
      } return undefined;
    };

    MainContainer.innerHTML
       += `
            <div class="movie" id="${assingnId()}">
                <img id="imgMovie${i}" src="${imgLink}" alt="" class="imgMovie"/>
                <div class="title-like">
                   <h2>${element.name}</h2>
                   <img id="like${i}" src="${like}" alt="" class="like"/>
                   <p>x${i} likes</p>
                </div>
                <p>${element.premiered}  ${element.language}</p>
                <a href="${element.officialSite}">Official Site</a>
                <button id="btnComment${i}">comments</button>
                <button id="reservation${i}">Add to card</button>
            </div>
       `;
  });
};

export default displayMovies;