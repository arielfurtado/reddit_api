import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

import Nav from '../Navigation';

const Header = () => {
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
          <S.Title>REACT<strong>JS</strong></S.Title>
        </S.Wrapper>
      </S.Header>
      <Nav />
    </>
  );
};

export default Header;
