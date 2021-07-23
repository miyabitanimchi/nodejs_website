const axios = require("axios");

module.exports.fetchAPI = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data);
  } catch (err) {
    console.log(`Oops, error! status code: ${err}`);
  }
}