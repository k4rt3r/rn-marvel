import axios from 'axios';
import md5 from 'md5';

const publickey = 'ab800b2256beb774eb40caf130abced9';
const privateKey = 'b0142888ef08ffe742797c5b9b7d87355af61576';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publickey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publickey,
    hash,
  },
});

export default api;