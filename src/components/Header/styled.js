import styled from 'styled-components';
import Img from "gatsby-image";

export const Wrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Header = styled.header`
    background: #0F0F0F;
    padding: 1vh 0;
`;
export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.8rem;
    color: #fff;
    strong {
        color: var(--highlightColor);
    }
`;

export const Logo = styled(Img)`
    margin-right: 1rem;
    width: 60px;
    height: 60px;
`;