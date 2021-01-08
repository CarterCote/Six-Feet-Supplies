import React from 'react';
import { Button, ActionButton, CardButton } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';

import ione from "../../images/i1.png";
import itwo from "../../images/i2.png";
import ithree from "../../images/i3.png";


import {
  FeaturesSection,
  FeaturesWrapper,
  FeaturesHeading,
  FeaturesContainer,
  FeaturesCard,
  FeaturesCardInfo,
  FeaturesCardIcon,
  FeaturesCardLogo,
  FeaturesCardImg,
  FeaturesCardPlan,
  FeaturesCardCost,
  FeaturesCardLength,
  FeaturesCardFeatures,
  FeaturesCardSubtitle,
  FeaturesCardFeature
} from './FeatureCards.elements';

function FeatureCard() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <FeaturesSection>
        <FeaturesWrapper>
          <FeaturesContainer>
            <FeaturesCard>
              <FeaturesCardInfo>
                <FeaturesCardIcon>
                  <FeaturesCardLogo src={ione} alt="" />   
                </FeaturesCardIcon>
                <FeaturesCardFeatures>
                  <FeaturesCardSubtitle>ELEGANTLY SIMPLE</FeaturesCardSubtitle>
                  <FeaturesCardFeature>We made it easy to ensure that you receive the supplies that you need.</FeaturesCardFeature>
                </FeaturesCardFeatures>
              </FeaturesCardInfo>
            </FeaturesCard>
            <FeaturesCard>
              <FeaturesCardInfo>
                <FeaturesCardIcon>
                  <FeaturesCardLogo src={itwo} alt="" />   
                </FeaturesCardIcon>
                <FeaturesCardFeatures>
                  <FeaturesCardSubtitle>MINDFUL & SANITARY</FeaturesCardSubtitle>
                  <FeaturesCardFeature>Our team is firmly compliant to the CDC's guidelines. Safety is our #1 priority.</FeaturesCardFeature>                
                </FeaturesCardFeatures>
              </FeaturesCardInfo>
            </FeaturesCard>
            <FeaturesCard>
              <FeaturesCardInfo>
                <FeaturesCardIcon>
                  <FeaturesCardLogo src={ithree} alt="" />              

                </FeaturesCardIcon>
                <FeaturesCardFeatures>
                  <FeaturesCardSubtitle>RELIABLE</FeaturesCardSubtitle>
                  <FeaturesCardFeature>Our team members ensure to fulfill your order between 1-3 days.</FeaturesCardFeature>

                </FeaturesCardFeatures>
              </FeaturesCardInfo>
            </FeaturesCard>
          </FeaturesContainer>
        </FeaturesWrapper>

      </FeaturesSection>

    </IconContext.Provider>
    
  );
}
export default FeatureCard;
