const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRx0N2j3LDDHlga0WoEO/comments?item_id=';

const countComments = async (itemid) => {
  let count = 0;
  try {
    const fetchedData = await fetch(`${url}${itemid}`);
    const comments = await fetchedData.json();
    count = comments.length;
    return count;
  } catch (e) {
    return 0;
  }
};

export default countComments;