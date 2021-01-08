import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ActionButton } from '../globalStyles';
import { FaDotCircle } from 'react-icons/fa';
import process from "../images/process.jpg";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  ImageColumn,
  IconColumn,
  Heading,
  CardIcon,
  Subheading,
  Subtitle,
  HeadingTextWrapper,
  TextWrapper,
  ImgWrapper,
  Img
} from './InfoSection/InfoSection.elements';

import {
    FeaturesCard,
    FeaturesCardImg,
    FeaturesCardPlan,
    FeaturesCardCost,
    FeaturesCardLength,
    FeaturesCardFeatures,
    FeaturesCardSubtitle,
    FeaturesCardFeature
  } from './FeatureCard/FeatureCards.elements';

function Process({
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
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            {/* <InfoColumn> */}
                <HeadingTextWrapper>
                    <Heading lightText={lightText}>OUR THREE-STEP (& 6 FEET AWAY) APPROACH</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>We utilize this process to reduce as much person to person contact as possible.</Subtitle>
                    <Link to='/sign-up'>
                    <ActionButton big fontBig primary="true">
                        Our sanitation procedures/ethics >
                    </ActionButton>
                    </Link>
                </HeadingTextWrapper>
                {/* </InfoColumn> */}
          </InfoRow>

          <InfoRow>
            <InfoColumn>
                <InfoRow>
                    <IconColumn>
                        <CardIcon> 
                            <FaDotCircle size={45}/>
                        </CardIcon>
                    </IconColumn>
                    <InfoColumn style={{marginLeft: "30px"}}>
                        <TextWrapper>
                            <Subheading lightText={lightText}>1. Place an order.</Subheading>
                            <Subtitle fontSmall lightTextDesc={lightTextDesc}>Place an order from the home page, specifying the item, brand, and desired quantity.</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
                <InfoRow>
                    <IconColumn>
                        <CardIcon> 
                            <FaDotCircle size={45}/>
                        </CardIcon>
                    </IconColumn>
                    <InfoColumn style={{marginLeft: "30px"}}>
                        <TextWrapper>
                            <Subheading lightText={lightText}>2. Communicate with our delivery team.</Subheading>
                            <Subtitle fontSmall lightTextDesc={lightTextDesc}>Once your order has been processed, your assigned deliverer will be able to contact you via your preference of email, text, or call. Feel free to ask us any follow-up questions regarding prices, brands, etc!</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
                <InfoRow>
                    <IconColumn>
                        <CardIcon> 
                            <FaDotCircle size={45}/>
                        </CardIcon>
                    </IconColumn>
                    <InfoColumn style={{marginLeft: "30px"}}>
                        <TextWrapper>
                            <Subheading lightText={lightText}>3. Receive your order!</Subheading>
                            <Subtitle fontSmall lightTextDesc={lightTextDesc}>That's it! Your deliverer will text you a picture of the receipt or give you a call (based on your preference).</Subtitle>
                            <Subtitle fontSmall lightTextDesc={lightTextDesc}>Don't like an item? Changed your mind? Feel free to communicate your needs with the team member assisting you, and you'll only pay for what you want to keep.</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </InfoColumn>
            <ImageColumn>
                <FeaturesCard style={{width: "555px", height: "620px"}}>
                    <ImgWrapper start={start}>
                        <Img src={process} alt={alt} />
                    </ImgWrapper>
                    <FeaturesCardSubtitle style={{margin: "18px"}}>PAY SECURELY & SAFELY.</FeaturesCardSubtitle>
                    <FeaturesCardFeature style={{margin: "18px", paddingRight: "0px"}}><i>Credit</i>: we'll email an invoice charging you for items you want to keep.</FeaturesCardFeature>
                    <FeaturesCardFeature style={{margin: "18px", paddingRight: "0px"}}><i>Cash</i>: our team member includes an envelope with your supplies. Pay for the items you want to keep, then leave the envelope outside and contact your deliverer.</FeaturesCardFeature>
                    <FeaturesCardFeature style={{margin: "18px", paddingRight: "0px"}}><i>Venmo</i>: contact your deliverer to exchange Venmo information.</FeaturesCardFeature>

                </FeaturesCard>
            </ImageColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Process;