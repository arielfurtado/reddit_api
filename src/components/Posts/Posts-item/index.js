import React from 'react';

import * as S from './styled';
import ReactLogo from '../../../images/icon-react.png';

const PostItem = () => (
    <S.Wrapper href="#">
        <S.Article>
            <S.Image src={ReactLogo} loading="lazy" />
            <S.Content>
                <S.Title>Titulo</S.Title>
                <S.Time>
                    enviado a 6 horas
                    <strong>por</strong>
                    <S.User> User</S.User>
                </S.Time>
            </S.Content>
        </S.Article>
    </S.Wrapper>
)

export default PostItem;