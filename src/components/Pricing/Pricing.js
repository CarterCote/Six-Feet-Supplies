import React from 'react';
import { Button, ActionButton, CardButton } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';

import latimes from "../../images/latimes.jpeg";
import cnninterview from "../../images/cnninterview.jpg";
import newsweek from "../../images/newsweek.png";
import newsweekLogo from "../../images/newsweek-logo.png";
import cnnLogo from "../../images/CNN-Logo.png";
import latimesLogo from "../../images/latimes-logo.png";






import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardLogo,
  PricingCardImg,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>PRESS & TESTIMONIES</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingCardLogo src={latimesLogo} alt="" />   
                </PricingCardIcon>
                <PricingCardImg src={latimes} alt="" />              

                <PricingCardFeatures>
                  <PricingCardFeature>"Thank you to these students of West Ranch High School for doing their part to ensure that our most vulnerable communities have access to the food they need during these times. What a terrific example of creating a culture of #metoWE. Bravo! 👏#CaliforniaforAll"</PricingCardFeature>
                </PricingCardFeatures>
                <CardButton style={{marginTop: "23px"}}>Read the article ></CardButton>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingCardLogo src={newsweekLogo} alt="" />   
                </PricingCardIcon>
                <PricingCardImg src={newsweek} alt="" />              
                <PricingCardFeatures>
                  <PricingCardFeature>"Today we’re spotlighting a student-led initiative that focuses on supplying groceries to those who can’t leave their house. Founded by high school students Zoe Monterola and Eric Luo, Six Feet Supplies is a completely free service that assists those in need all while following CDC guidelines. #HeroesOfPandemic</PricingCardFeature>
                </PricingCardFeatures>
                <CardButton>Watch the video ></CardButton>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingCardLogo src={cnnLogo} alt="" />              

                </PricingCardIcon>
                <PricingCardImg src={cnninterview} alt="" />              

                <PricingCardFeatures>
                  <PricingCardFeature>"I talk to two high school students who set up a free food delivery service @SixFeetSupplies that buys & delivers groceries for those most in need. Here's my chat with Eric Luo & Zoe Monterola:"</PricingCardFeature>

                </PricingCardFeatures>
                <CardButton style={{marginTop: "98px"}}>Read the Post ></CardButton>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <ActionButton style={{marginTop: "30px"}}>Read more testimonies here ></ActionButton>

        </PricingWrapper>

      </PricingSection>

    </IconContext.Provider>
    
  );
}
export default Pricing;
