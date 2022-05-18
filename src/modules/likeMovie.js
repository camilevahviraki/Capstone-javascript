const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO';

class likeFeature {
  async likeMovie(movieName) {
    try {
      const postLike = await fetch(`${url}/likes/`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ item_id: `${movieName}` }),
        });

      const data = await postLike.text();

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async likesList() {
    let arrList = [];
    const fetchLikes = await fetch(`${url}/likes/`)
      .then((response) => response.json()).then((response) => {
        arrList = response;
      });
    // console.log('likes', arrList);
    return arrList;
  }
}

export default likeFeature;