import axios from 'axios';
import ApiBuilder from './builder';

const Api = axios.create({
 baseURL: 'https://www.reddit.com/r/reactjs/',
});

const get = async (target, postLimit, next = null) => {
 try {
  const { data } = await Api.get(`${target}.json?limit=${postLimit} ${next ? '&after=' + next : ''}`);
  return ApiBuilder(data.data, data.data.after);
 } catch (e) {
  throw e;
 }
};

export default {
 get,
};
