import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

import Nav from '../Navigation';

const Header = ({ handle, activeItem }) => {
 const { avatarImage } = useStaticQuery(
  graphql`
   query {
    avatarImage: file(relativePath: { eq: "icon-react.png" }) {
     childImageSharp {
      fluid(maxWidth: 60) {
       ...GatsbyImageSharpFluid_noBase64
      }
     }
    }
   }
  `
 );
 return (
  <>
   <S.Header>
    <S.Wrapper>
     <S.Logo fixed={avatarImage.childImageSharp.fluid} />
     <S.Title>
      REACT<strong>JS</strong>
     </S.Title>
    </S.Wrapper>
   </S.Header>
   <Nav handle={handle} active={activeItem} />
  </>
 );
};

Header.propTypes = {
 handle: PropTypes.string.isRequired,
 activeItem: PropTypes.string.isRequired,
};

export default Header;
