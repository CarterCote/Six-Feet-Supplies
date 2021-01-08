import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: 'Omnes Regular', sans-serif;
  font-weight: bold;
 }
 
 h1 {
  font-family: 'FuturaLTPro-Book', sans-serif;

 }
 p {
  color: #3D3D3D;
  font-family: 'Omnes Regular', sans-serif;
  font-size: 18px;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const HeroContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  background-color: #FB7131;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#FB7131' : '#4B59F7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '20px 50px' : '16px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#FE9766' : '#0467FB')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const OutlineButton = styled.button`
  background: #fff;
  border: ${({ primary }) => (primary ? '1px solid #FB7131' : '1px solid #4B59F7')};
  border-radius: 4px;

  white-space: nowrap;
  padding: ${({ big }) => (big ? '20px 45px' : '16px 20px')};
  color: ${({ primary }) => (primary ? '#FB7131' : '#4B59F7')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #fff;
    background-color: ${({ primary }) => (primary ? '#FE9766' : '#0467FB')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  white-space: nowrap;
  padding: 0px 0px;
  color: #FB7131;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    color: #943616;
    background-color: none;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CardButton = styled.button`
  border-radius: 18px;
  background: #FFD5C2;
  white-space: nowrap;
  padding: 8px 50px;
  color: #fb7131;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background-color: #fb7131;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
