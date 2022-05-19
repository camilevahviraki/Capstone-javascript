const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO';
let arrList = [];

class LikeFeature {
  constructor() {
    this.arrayLikes = [];
  }

  async likeMovie(movieName) {
    this.arrayLikes = [];
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
    const fetchLikes = await fetch(`${url}/likes/`)
      .then((response) => response.json()).then((response) => {
        arrList = response;
        return arrList;
      });
    this.arrayLikes = arrList;

    return arrList;
  }

  arrListW() {
    return this.arrayLikes;
  }
}

export default LikeFeature;