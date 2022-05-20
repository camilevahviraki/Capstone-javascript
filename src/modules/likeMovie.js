/* eslint-disable class-methods-use-this */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO';

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
      return await postLike.text();
    } catch (e) {
      return [];
    }
  }

  async likesList() {
    let likesList = [];
    try {
      const fetchLikes = await fetch(`${url}/likes/`);
      likesList = await fetchLikes.json();
      return likesList;
    } catch (e) {
      return [];
    }
  }

  arrListW() {
    return this.arrayLikes;
  }
}

export default LikeFeature;