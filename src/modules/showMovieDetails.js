/* eslint-disable import/no-cycle */
import fetchComments from './fetchComments.js';
import populateComments from './populateComments.js';
import wrapForm from './wrapFrom.js';

const showMovieDetails = async (movie) => {
  document.getElementById('moviename').innerHTML = movie.name;
  document.getElementById('imgmoviedetails').setAttribute('src', movie.image.original);
  document.getElementById('mv-description').innerHTML = `<div class="p-description">${movie.summary}</div>
  <h4>Movie details</h4>
  <hr>
  <div id="mv-details-inner"><ul class="mv-details">
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

  <h4>Add Comment</h4>
   <hr>
  </div>
  `;
  document.getElementById('mv-description').appendChild(wrapForm(movie));
  const comments = await fetchComments(movie.id);
  populateComments(comments);
};

export default showMovieDetails;