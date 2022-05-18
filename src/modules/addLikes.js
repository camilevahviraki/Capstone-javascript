import likeFeature from './likeMovie';

const likeFunctions = new likeFeature();

const addLike = () => {
  const likeBtn = document.querySelectorAll('.like');
  let abc;
  let abcd = 0;
  likeBtn.forEach((a, i) => {
    document.getElementById(`like${i}`).addEventListener('click', () => {
      const titleMovie = document.getElementById(`titleMovie${i}`).textContent;
      const likeNum = document.getElementById(`likesNum${i}`);
      likeFunctions.likeMovie(titleMovie);
      abc = parseInt(likeNum.innerText);
      abc += 1;
      abcd += 1;
      const zed = abcd - 1;
      likeNum.innerText = abc - zed;
      console.log('likeNum', zed);
    });
  });
};

export default addLike;
