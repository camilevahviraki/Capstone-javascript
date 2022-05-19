import HTMLElementCreator from './createHTMLElement';

const populateComments = (comments) => {
  if (comments) {
    comments.forEach((comment) => {
      const commnetItem = HTMLElementCreator
        .addElementText(`${comment.username} ${comment.comment}`)
        .addElement('li')
        .create();
      document.getElementById('comments-list').appendChild(commnetItem);
    });
  } else {
    const commnetItem = HTMLElementCreator
      .addElementText('No comments found')
      .addElement('li')
      .create();
    document.getElementById('comments-list').appendChild(commnetItem);
  }
};

export default populateComments;