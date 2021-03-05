const fetch = require('node-fetch');

const APP_ID = process.env.APP_ID;
const CLIENT_TOKEN = process.env.CLIENT_TOKEN;
const ACCESS_TOKEN = `${APP_ID}|${CLIENT_TOKEN}`;
const apiUrl = 'https://graph.facebook.com/v9.0/instagram_oembed';
const postUrl = 'https://www.instagram.com/p/CKvZe7kn5uH/';
const path = `${apiUrl}?url=${postUrl}&access_token=${ACCESS_TOKEN}`;
console.log(path);

exports.handler = async (event) => {
  const response = await fetch(path)
  .then((response) => response.json())
  .catch((error) => console.log('error', error));
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}