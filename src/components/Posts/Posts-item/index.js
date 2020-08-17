import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostItem = ({ title, user, date, image, link }) => (
 <S.Wrapper href={link} target="_blank">
  <S.Article>
   {image && <S.Image src={image} />}

   <S.Content>
    <S.Title dangerouslySetInnerHTML={{ __html: title }} />
    <S.Time>
     enviado a {date}
     <strong> por </strong>
     <S.User>{user}</S.User>
    </S.Time>
   </S.Content>
  </S.Article>
 </S.Wrapper>
);
PostItem.propTypes = {
 title: PropTypes.string.isRequired,
 user: PropTypes.string.isRequired,
 date: PropTypes.string.isRequired,
 image: PropTypes.string.isRequired,
};
export default PostItem;
