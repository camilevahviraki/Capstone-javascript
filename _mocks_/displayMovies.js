const displayMovies = (arrMovies) => {
  let numberOfMovies = 0;
  arrMovies.forEach((element, i) => {
    numberOfMovies = i + 1;
  });
  return numberOfMovies;
};

export default displayMovies;
