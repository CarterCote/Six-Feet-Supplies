import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #dedede;
`;

export const PricingWrapper = styled.div`
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

export const PricingHeading = styled.h1`
  color: #454545;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
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

export const PricingCard = styled(Link)`
  background: #fff;
  ${'' /* box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2); */}
  width: 350px;
  height: 560px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #A0A09F;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 4px 24px 4px 24px;
  align-items: center;
  color: #fff;
  
`;


export const PricingCardImg = styled.img`
  padding-right: 0;
  ${'' /* border: 0; */}
  border: 8px solid white;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #454545;

  ${'' /* border-color: #000; */}
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
`;
export const PricingCardLogo = styled.img`
  padding-right: 0;
  ${'' /* border: 0; */}
  border: 8px solid white;
  border-radius: 8px;

  ${'' /* border-color: #000; */}
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 55px;
`;

export const PricingCardIcon = styled.div`
  margin: 12px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 8px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #454545;
  font-size: 17px;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
