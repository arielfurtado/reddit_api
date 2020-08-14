import styled from 'styled-components';

export const Wrapper = styled.a`
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(18,18,18,0.12);
`;
export const Article = styled.article`
    display: flex;
    align-items: center;
    color: var(--primaryColor);
`;
export const Image = styled.img`
    width: 90px;
`;
export const Content = styled.div``;
export const Title = styled.h2`
    font-weight: bold;
    font-size: 2rem;
`;
export const Time = styled.time`
    display: block;
    font-size: 1rem;
`;
export const User = styled.span`
    color: var(--highlightColor);
`;