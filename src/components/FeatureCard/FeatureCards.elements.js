import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FeaturesSection = styled.div`
  padding: 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: none;

`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #fb7131;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
`;

export const FeaturesHeading = styled.h1`
  color: #454545;
  font-size: 48px;
  margin-bottom: 24px;
  
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FeaturesCard = styled(Link)`
  background: #fff;
  ${'' /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */}
  margin: 65px;
  width: 350px;
  height: 250px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #A0A09F;


  &:nth-child(2) {
    margin: 16px;
  }

  ${'' /* &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  } */}

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const FeaturesCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 4px 18px 4px 18px;
  align-items: middle;
  color: #fff;

`;


export const FeaturesCardImg = styled.img`
  padding-right: 0;
  ${'' /* border: 0px solid white; */}
  border-radius: 8px;

  max-width: 100%;
  align-items: middle;
  display: inline-block;
  max-height: 232px;
`;
export const FeaturesCardLogo = styled.img`
  padding-right: 0;
  border: 0px solid white;
  border-radius: 8px;

  max-width: 100%;
  align-items: middle;
  display: inline-block;
  max-height: 141px;
`;



export const FeaturesCardIcon = styled.div`
  margin: 12px 0;
`;

export const FeaturesCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const FeaturesCardCost = styled.h4`
  font-size: 40px;
`;

export const FeaturesCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const FeaturesCardFeatures = styled.ul`
  margin: 1px 0 8px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #454545;
`;

export const FeaturesCardSubtitle = styled.li`
  margin-bottom: 10px;
  color: #FB7131;
  font-size: 22px;
`;

export const FeaturesCardFeature = styled.li`
  margin-bottom: 10px;
  color: #3078BE;
  font-size: 18px;

`;
