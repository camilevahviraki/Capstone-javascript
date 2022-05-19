/* eslint-disable camelcase */
const createComment = async (item_id) => {
  try {
    const username = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/comments',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ item_id, username, comment }),
      });
  } catch (e) {
    console.log(e.message);
  }
};

export default createComment;