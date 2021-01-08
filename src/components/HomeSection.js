import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

import { Container, Button, OutlineButton, HeroContainer } from '../globalStyles';
import Card1 from "../images/card1.jpg";
import Card2 from "../images/card2.jpg";
import Card3 from "../images/card3.jpg";

import {
  InfoSec,
  InfoRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection/InfoSection.elements';

function HomeSection({
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
      <InfoSec lightBg="false" style={{paddingBottom: "0px"}}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <HeroColumn>
              <TextWrapper>
                <Heading lightText={lightText}>Covid-19 has left our world fearful & fragmented.</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>Six Feet Supplies is here to CHANGE that. We're a student-led initiative that delivers the supplies  that you need with love (& safety), all at zero-cost.</Subtitle>
              </TextWrapper>
            </HeroColumn>
            <HeroColumn>
                <Button primary big fontBig style={{margin: "0.5rem 1rem 0.5rem 0rem"}}>Request a delivery</Button>
                <OutlineButton primary big fontBig>Contact a team member</OutlineButton>
            </HeroColumn>
          </InfoRow>
        </Container>
        
      </InfoSec>
 
    </>
  );
}

export default HomeSection;
