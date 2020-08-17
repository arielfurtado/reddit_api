import styled from 'styled-components';

export const Wrapper = styled.a`
 text-decoration: none;
 display: block;
 margin-bottom: 10px;
 box-shadow: 0 1px 3px rgba(18, 18, 18, 0.12);
`;
export const Article = styled.article`
 display: flex;
 align-items: center;
 color: var(--primaryColor);
 padding: 10px;
 @media (max-width: 640px) {
  flex-direction: column;
  align-items: center;
 }
`;
export const Image = styled.img`
 width: 90px;
 margin-right: 10px;
`;
export const Content = styled.div``;
export const Title = styled.h2`
 font-weight: bold;
 font-size: 2rem;
 line-height: 1.2;
 @media (max-width: 640px) {
  font-size: 1.7rem;
  text-align: center;
 }
`;
export const Time = styled.time`
 display: block;
 font-size: 1rem;
`;
export const User = styled.span`
 color: var(--highlightColor);
`;
