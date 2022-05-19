/* eslint-disable import/no-cycle */
import createComment from './createComment';
import showMovieDetails from './showMovieDetails';
import HTMLElementCreator from './createHTMLElement';

const wrapForm = (movie) => {
  const formControls = HTMLElementCreator.addElementText(`
  <div class="mb-3">
    <div class="form-group"><input type="text" class="form-control shadow-none" id="name" placeholder="Your name"></div>
    <div class="form-group mt-3">
      <textarea  id="comment" rows="5" class="form-control shadow-none" id="message" placeholder="Your insists"></textarea>
    </div>
  </div>
  
  `).addAttributes({ id: `conttr${movie.id}` }).addElement('div').create();

  const btnAddComment = HTMLElementCreator
    .addElementText('<button type="submit" class="btn btn-primary" id="btn-post-comment">Comment</button>')
    .addAttributes({ id: `btncon${movie.id}` })
    .addElement('span')
    .create();

  btnAddComment.addEventListener('click', async () => {
    await createComment(movie.id);
    showMovieDetails(movie);
  });

  const formContainer = HTMLElementCreator.addAttributes({ id: movie.id }).addElement('div')
    .create();
  formContainer.innerHTML = '';
  formContainer.appendChild(formControls);
  formContainer.appendChild(btnAddComment);
  return formContainer;
};

export default wrapForm;