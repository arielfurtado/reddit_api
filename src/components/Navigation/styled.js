import styled from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 10px;
`;
export const Button = styled.button`
 color: #ff5e00;
 font-weight: bold;
 background: ${(props) => (props.isActive ? 'rgba(255,94,0,0.08)' : '#fff')};
 border: none;
 padding: 10px;
 width: 160px;
 text-align: center;
 text-transform: uppercase;
 outline: transparent;
 font-size: 1.6rem;
 cursor: pointer;
 position: relative;
 box-shadow: 0 1px 3px rgba(18, 18, 18, 0.12);
 margin: 0 10px;
 &:hover {
  background: rgba(255, 94, 0, 0.08);
  &:before,
  &:after {
   transform: scale(1);
  }
 }
 &:before,
 &:after {
  bottom: 0px;
  content: '';
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: transform 0.25s ease 0s;
  border: solid;
  border-color: #ff5e00;
  transform: ${(props) => (props.isActive ? 'scale(1)' : 'none')};
 }
 &:before {
  transform: ${(props) => (props.isActive ? 'scale(1)' : 'scaleY(0)')};
  border-width: 0 1px;
 }
 &:after {
  transform: ${(props) => (props.isActive ? 'scale(1)' : 'scaleX(0)')};
  border-width: 1px 0;
 }
`;
