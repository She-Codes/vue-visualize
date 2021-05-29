const fetch = require('node-fetch');

const APP_ID = process.env.APP_ID;
const CLIENT_TOKEN = process.env.CLIENT_TOKEN;
const ACCESS_TOKEN = `${APP_ID}|${CLIENT_TOKEN}`;
const apiUrl = 'https://graph.facebook.com/v9.0/instagram_oembed';
//const postUrl = 'https://www.instagram.com/p/CKvZe7kn5uH/';

exports.handler = async (event) => {
  const {queryStringParameters: {url: postUrl}} = event;
  const path = `${apiUrl}?url=${postUrl}&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(path);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.log(error);
  }
}