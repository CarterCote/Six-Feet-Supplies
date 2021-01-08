import React from 'react';
import { InfoSection } from '../../components';
import { Container, Button, ActionButton } from '../../globalStyles';
import { Link } from 'react-router-dom';



import {
  InfoSec,
  InfoRow,
  InfoColumn,
  SpacedHeading,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subheading,
  Subtitle,
  ImgWrapper,
  Img
} from '../../components/InfoSection/InfoSection.elements';

function Contact() {
  return (
    <>
      <InfoSec lightBg="false">
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <SpacedHeading lightText="false">CONTACT OUR TEAM</SpacedHeading>
                <Subtitle lightTextDesc="true">Questions about our service? Interested in partnering with us? We'd love to answer any inqueries that you may have.</Subtitle>
                <Link to='/sign-up'>
                  <ActionButton big fontBig primary="true">
                    Hi
                  </ActionButton>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                {/* <Img src={img} alt={alt} /> */}
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>      
      <InfoSec lightBg="false" style={{paddingBottom: "0px"}}>
        <Container>
          <InfoRow>
            <HeroColumn>
              <TextWrapper>
                <Heading style={{color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>OUR VOLUNTEERS</Heading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">—— We ensure that all volunteers are in good health and do not live with any at-risk persons.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">—— We ensure that all volunteers are compliant with our safety procesdures and the CDC's  sanitation guidelines (proper handwashing technique, keeping 6ft distance apart, following the CDC's "keep yourself safe" procedures). Our volunteers have been trained with informational sessions hosted online.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">—— We ensure that all volunteers wash their hands before and after retrieving supplies, as well as when  they enter or depart a store.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">—— We ensure that our documents containing our safety procedures are easily accesible to our volunteers.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">—— We ensure that our volunteers are equipped with sanitary measures, such as pocket hand sanitizers.</Subtitle>

                
                <Heading style={{marginTop: "80px", color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>OUR NON-CONTACT PROCESS</Heading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">To remain compliant to the CDC's guidelines, your supply delivery will be placed at your front door to omit person-to-person interaction.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">You will be notified by your deliverer when your order has arrived.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">We offer online payment options, but if you need to pay in cash, we can accomodate for you!</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">Our volunteers will include an envelope (intended for money) with your supplies. You can leave the envelope outside, and given us a call/text, to omit person-to-person contact.</Subtitle>

              </TextWrapper>
            </HeroColumn>
          </InfoRow>
        </Container>
        
      </InfoSec>
    </>
  );
}


export default Contact;