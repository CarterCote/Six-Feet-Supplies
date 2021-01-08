import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';


import { Container, Button, OutlineButton, HeroContainer } from '../globalStyles';
import orangeFinal from "../images/orange final.gif";
import blueFinal from "../images/blue final.gif";

import {
  FeaturesSection,
  FeaturesWrapper,
  FeaturesContainer,
  FeaturesHeading,
  FeaturesSubtitle,
  FeaturesCard,
  FeaturesCardInfo,
  FeaturesCardIcon,
  FeaturesCardLogo,
  FeaturesCardImg,
  FeaturesCardFeatures,
  FeaturesCardSubtitle,
  FeaturesCardFeature,
  Img,
} from './FeatureCard/FeatureCards.elements';

import {
    Stat,
  } from './InfoSection/InfoSection.elements';


  function OurImpact() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
    <FeaturesSection style={{padding: "20px 0 50px"}}>
      <FeaturesWrapper>
        <FeaturesHeading>OUR IMPACT</FeaturesHeading>
        <FeaturesCardSubtitle>-since beginning operations on March 16, 2020</FeaturesCardSubtitle>
        <FeaturesContainer>
            <FeaturesCard style={{border: "0px solid #A0A09F", margin: "25px"}}>
            <Stat>9.8★</Stat> 
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    {/* <FeaturesCardIcon> */}
                    <FeaturesCardImg style={{maxHeight: "270px"}} src={orangeFinal} alt="" />  
                    <FeaturesCardSubtitle>

                    </FeaturesCardSubtitle>
                    {/* </FeaturesCardIcon> */}
                </FeaturesCardInfo>
                </FeaturesCard>

                <FeaturesCard style={{border: "0px solid #A0A09F", margin: "25px"}}>
                <Stat>$40k+</Stat> 
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    {/* <FeaturesCardIcon> */}
                    <FeaturesCardImg style={{maxHeight: "270px"}} src={blueFinal} alt="" />   
                    {/* </FeaturesCardIcon> */}
 
                </FeaturesCardInfo>
                </FeaturesCard>

                <FeaturesCard style={{border: "0px solid #A0A09F", margin: "25px"}}>
                <Stat>380+</Stat> 
                <FeaturesCardInfo style={{alignItems: "center"}}>
                    {/* <FeaturesCardIcon> */}
                    <FeaturesCardImg style={{maxHeight: "270px"}} src={orangeFinal} alt="" />              
                    {/* </FeaturesCardIcon> */}

                </FeaturesCardInfo>
            </FeaturesCard>
        </FeaturesContainer>
        </FeaturesWrapper>

      </FeaturesSection>

    </IconContext.Provider>

            /* <TextWrapper style={{textAlign: "center"}}> */
            //     <Heading>Our Impact</Heading>
            //     <Subtitle lightTextDesc="false">-since we started operations on March 24, 2020-</Subtitle>
            // <Row>
            // <Column>
            //     <div>
            //     <img src="images/orange final.gif" alt="stats1" />
            //     <div className="centered p-large">9.8★</div>
            //     </div>

            //     <h3 className="feature-title">on Survey Monkey</h3>
            // </Column>

            // <Column>
            //     <img src="images/blue final.gif" alt="stats2" />
            //     <div className="centered p-large">$40K+</div>

            //     <h3 className="feature-title">​worth of groceries purchased</h3>
            // </Column>

            // <Column>
            //     <img src="images/orange final.gif" alt="stats3" />
            //     <div className="centered p-large">380+</div>

            //     <h3 className="feature-title">people served</h3>
            // </Column>
            // </Row>
            /* </TextWrapper> */

    );
}

export default OurImpact;