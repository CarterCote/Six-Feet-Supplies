import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import { Container, Button, OutlineButton } from '../../globalStyles';


import {
  InfoSec,
  InfoRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subheading,
  Subtitle,
  ImgWrapper,
  Img
} from '../../components/InfoSection/InfoSection.elements';

function OurApproach() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSec lightBg="false" style={{paddingBottom: "0px"}}>
        <Container>
          <InfoRow>
            <HeroColumn>
              <TextWrapper>
                <Heading style={{color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>STEP 1: PLACE AN ORDER.</Heading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">We offer three services: Standard Grocery Delivery, Grocery Delivery+, and Emergency Delivery. You can learn more about what each service offers by clicking on the corresponding page found on our website. Place your order today!</Subtitle>
                <Button primary big fontBig style={{margin: "0.2rem 1rem 0.2rem 0rem"}}>Request a delivery</Button>
                <OutlineButton primary big fontBig>Contact a team member</OutlineButton>
                
                <Heading style={{marginTop: "50px", color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>STEP 2: COMMUNICATE WITH OUR DELIVERY TEAM.</Heading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">Once an order has been processed, the customer is assigned to a member of our delivery team. Their assigned deliverer will be able to contact the customer via their preference of email, text, or call, notifying them that their order has been processed. Customers can always ask us any follow-up questions regarding prices, brands, etc!</Subtitle>
              
                <Heading style={{marginTop: "50px", color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>STEP 3: RECEIVE YOUR ORDER.</Heading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">That's it! The assigned deliverer will text the customer a picture of the receipt or give them a call (based on their preference). </Subtitle>
                <Subheading style={{color: "#fb7131"}}>WHAT IF I DON'T LIKE AN ITEM? OR CHANGED MY MIND?</Subheading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">Our customers are always welcome to communicate their needs with the team member assisting them, and they will only pay for what they want to keep.</Subtitle>
                
                <Subheading style={{color: "#fb7131"}}>PAY SECURELY & SAFELY.</Subheading>
                <Subtitle style={{color: "#303030", marginBottom: "8px"}} lightTextDesc="false"><i>Credit</i>:  we'll email an invoice charging you for items you want to keep.</Subtitle>
                <Subtitle style={{color: "#303030", marginBottom: "8px"}} lightTextDesc="false"><i>Cash</i>: our team member includes an envelope with your supplies. Pay for the items you want to keep, then leave the envelope outside and contact your deliverer.</Subtitle>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false"><i>Venmo</i>: contact your deliverer to exchange Venmo information.</Subtitle>

                <Heading style={{marginTop: "50px", color: "#303030", fontSize: "42px", letterSpacing: "8px"}}>(OUR SUPER SECRET) STEP 4: HELP US OUT!</Heading>
                <Subheading style={{color: "#fb7131"}}>DO US A FAVOR! SPREAD THE WORD!</Subheading>
                <Subtitle style={{color: "#303030"}} lightTextDesc="false">We want to help as many people in SCV as possible! please help us in our mission by spreading the word online or 6-ft away- tell your neighbor, cousin, neighbor's cousin!</Subtitle>
                
                <Subheading style={{color: "#fb7131"}}>HELP US IMPROVE!</Subheading>
                <Subtitle style={{color: "#303030", marginBottom: "8px"}} lightTextDesc="false">We want to ensure that our services are suitable for your needs. Any suggestions for improvement? Please fill out the survey that we have sent after receiving your order. Tell us a joke, or compliment one of our team members ;) anything is appreciated!</Subtitle>



              </TextWrapper>
            </HeroColumn>
          </InfoRow>
        </Container>
        
      </InfoSec>
    </>
  );
}

export default OurApproach;
