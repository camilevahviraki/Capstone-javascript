const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/comments?item_id=';

const fetchComments = async (itemid) => {
  let comments = [];
  try {
    const fetchedData = await fetch(`${url}${itemid}`);
    comments = await fetchedData.json();
  } catch (e) {
    console.log(e);
  }
  return comments;
};

export default fetchComments;