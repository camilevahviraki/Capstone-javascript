import fetchComments from './fetchComments';
import populateComments from './populateComments';

const showMovieDetails = async (movie) => {
  document.getElementById('moviename').innerHTML = movie.name;
  document.getElementById('imgmoviedetails').setAttribute('src', movie.image.original);
  document.getElementById('mv-description').innerHTML = `${movie.summary}
  <h4>Movie details</h4>
  <hr>
  <div id="mv-details-inner"><ul>
  <li>Language: ${movie.language}</li>
  <li>Released on: ${movie.premiered}</li>
  <li>Countrty: ${movie.network.country.name}</li>
  <li>Status: ${movie.status}</li>
  </ul></div>
  <h4>Comments</h4>
  <hr>
  <div class"comments-container" id="comments-container">
  <ul id="comments-list">
  </ul>
  </div>
  `;

  const comments = await fetchComments(250);
  populateComments(comments);
};

export default showMovieDetails;