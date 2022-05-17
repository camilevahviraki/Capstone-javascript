const likeMovie = async () => {
  try {
    const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/likes/',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ item_id: 'movie1' }),
      });

    const data = await postLike.text();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

export default likeMovie;