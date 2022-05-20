/* eslint-disable max-len */
const getMovieLike = (likes, movieName) => likes.filter((like) => like.item_id === movieName)[0].likes;

export default getMovieLike;