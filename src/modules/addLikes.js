import LikeFeature from './likeMovie';

const likeFunctions = new LikeFeature();

const addLike = () => {
  const likeBtn = document.querySelectorAll('.like');
  let abc;
  let abcd = 0;
  likeBtn.forEach((a, i) => {
    document.getElementById(`like${i}`).addEventListener('click', () => {
      const titleMovie = document.getElementById(`titleMovie${i}`).textContent;
      const likeNum = document.getElementById(`likesNum${i}`);
      likeFunctions.likeMovie(titleMovie);
      abc = parseInt(likeNum.innerText, 10);
      abc += 1;
      abcd += 1;
      likeNum.innerText = `${(abc - abcd) + 1} likes`;
      abcd = 1;
    });
  });
};

export default addLike;
