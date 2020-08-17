import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Nav = ({ handle, active }) => (
 <S.Wrapper>
  <S.Button onClick={() => handle('hot')} isActive={active === 'hot'}>
   Hot
  </S.Button>
  <S.Button onClick={() => handle('new')} isActive={active === 'new'}>
   News
  </S.Button>
  <S.Button onClick={() => handle('rising')} isActive={active === 'rising'}>
   Rising
  </S.Button>
 </S.Wrapper>
);

Nav.propTypes = {
 handle: PropTypes.string.isRequired,
 activeItem: PropTypes.string.isRequired,
};

export default Nav;
