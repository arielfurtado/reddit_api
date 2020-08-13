import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from "../../styles/global";
import * as S from './styled';


const Layout = ({ children }) => {
  return (
    <>
      <S.Main>
        <GlobalStyles />
        {children}
      </S.Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
