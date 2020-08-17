import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import PostItem from './Posts-item';

const Posts = ({ posts }) => {
 return (
  <S.Wrapper>
   {posts.map((post) => (
    <PostItem title={post.title} user={post.author} date={post.date} image={post.thumbnail} link={post.redditUrl} />
   ))}
  </S.Wrapper>
 );
};

Posts.propTypes = {
 posts: PropTypes.object.isRequired,
};
export default Posts;
