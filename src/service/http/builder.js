import UtilsService from '../utils';

const ApiBuilder = (data, nextPage) => {
 const next = nextPage;
 const posts = [];
 data.children.map((post) => posts.push(_PostStructure(post.data)));
 return {
  posts,
  next,
 };
};

const _PostStructure = (postData) => ({
 author: postData.author,
 title: postData.title,
 redditUrl: postData.url,
 thumbnail: postData.thumbnail.indexOf('http') !== -1 ? postData.thumbnail : null,
 date: UtilsService.getDate(postData.created_utc),
 authorLink: `https://www.reddit.com/u/${postData.author}`,
});

export default ApiBuilder;
