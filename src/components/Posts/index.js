import React from 'react';
import * as S from './styled';

import PostItem from './Posts-item';


const Posts = () => {
    const abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <S.Wrapper>
            {abc.map(item => <PostItem />)}
        </S.Wrapper>
    )
}

export default Posts