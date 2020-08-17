import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
 background: var(--highlightColor);
 border-radius: 50px;
 border: 0;
 bottom: 10px;
 color: #fff;
 cursor: pointer;
 font-size: 1.8rem;
 left: 50%;
 margin-left: -100px;
 padding: 10px;
 position: fixed;
 text-transform: uppercase;
 width: 200px;
 text-align: center;
 display: flex;
 justify-content: center;
 pointer-events: ${(props) => (props.isLoading ? 'none' : 'initial')};
 &:after {
  content: '';
  display: block;
  border: ${(props) => (props.isLoading ? '5px' : '0')} solid #f3f3f3;
  border-radius: 50%;
  border-top: ${(props) => (props.isLoading ? '5px' : '0')} solid #3498db;
  width: ${(props) => (props.isLoading ? '10px' : '0')};
  height: ${(props) => (props.isLoading ? '10px' : '0')};
  overflow: hidden;
  animation: ${rotate} 2s linear infinite;
  margin-left: 5px;
  transition: width, height 0.1s;
 }
`;
