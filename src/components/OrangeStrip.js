import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';


import { Container, Button, OutlineButton, HeroContainer } from '../globalStyles';
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";

import {
  FeaturesSection,
  IntroWrapper,
  FeaturesContainer,
  FeaturesCard,
  FeaturesCardInfo,
  FeaturesCardIcon,
  FeaturesCardImg,
  FeaturesCardFeatures,
  FeaturesCardSubtitle,
  FeaturesCardFeature,
  Img,
} from './FeatureCard/FeatureCards.elements';

import {
    InfoSec,
  } from './InfoSection/InfoSection.elements';

function OrangeStrip({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
    <FeaturesSection>
      <IntroWrapper>
        <FeaturesContainer>
            <FeaturesCard style={{border: "0px solid #A0A09F"}}>
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    <FeaturesCardIcon>
                    <FeaturesCardImg src={Card1} alt="" />   
                    </FeaturesCardIcon>
                    <Link>
                        <Button variant="primary" style={{padding: "10px 30px",}}>STANDARD GROCERY DELIVERY</Button>
                    </Link>
                </FeaturesCardInfo>
                </FeaturesCard>
                <FeaturesCard style={{border: "0px solid #A0A09F"}}>
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    <FeaturesCardIcon>
                    <FeaturesCardImg src={Card2} alt="" />   
                    </FeaturesCardIcon>
                    <Link>
                        <Button variant="primary" style={{padding: "10px 50px",}}> GROCERY DELIVERY PLUS</Button>
                    </Link>
                </FeaturesCardInfo>
                </FeaturesCard>
                <FeaturesCard style={{border: "0px solid #A0A09F"}}>
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    <FeaturesCardIcon>
                    <FeaturesCardImg src={Card3} alt="" />              
                    </FeaturesCardIcon>
                    <Link>
                        <Button variant="primary" style={{padding: "10px 30px",}}>EMERGENCY SUPPLY DELIVERY</Button>
                    </Link>
                </FeaturesCardInfo>
            </FeaturesCard>
        </FeaturesContainer>
        </IntroWrapper>

      </FeaturesSection>

    </IconContext.Provider>
 
  );
}

export default OrangeStrip;
