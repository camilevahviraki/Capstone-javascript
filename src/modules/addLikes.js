import likeFeature from './likeMovie';

const likeFunctions = new likeFeature();

const addLike = (movieName) => {
  const likeBtn = document.querySelectorAll('.like');

  likeBtn.forEach((a, i) => {
    document.getElementById(`like${i}`).addEventListener('click', () => {
      likeFunctions.likeMovie(movieName);
      console.log(`${movieName}`, 'cliked');
    });
  });
};

export default addLike;
