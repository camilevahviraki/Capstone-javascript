import HTMLElementCreator from './createHTMLElement';

const populateComments = (comments) => {
  if (comments.length > 0) {
    comments.forEach((comment, i) => {
      const commnetItem = HTMLElementCreator
        .addAttributes({ id: `comment_${i}` })
        .addClasses('ls-item')
        .addElementText(`<div class="comment-item">
          <div class="comment-avatar"><h4>${comment.username.substr(0, 1)}</h4></div>
           <div class="comment-content">
            <h6>${comment.username}</h6>
            <p>${comment.comment},   posted on ${comment.creation_date}</p>
           </div>
          </div>`)
        .addElement('li')
        .create();
      commnetItem.classList.remove('movie');
      document.getElementById('comments-list').appendChild(commnetItem);
    });
  } else {
    document.getElementById('comments-list').innerHTML = 'No comments found';
  }
};

export default populateComments;