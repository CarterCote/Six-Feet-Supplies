import React from 'react';
import logo from "../../images/logo.png"
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  MainFooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <MainFooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to='/'>Choose a City</FooterLink>
            <FooterLink to='/'>Standard Delivery</FooterLink>
            <FooterLink to='/'>Delivery+</FooterLink>
            <FooterLink to='/'>Emergency Delivery</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Our Procedures</FooterLinkTitle>
            <FooterLink to='/'>Our Approach</FooterLink>
            <FooterLink to='/'>Our Ethics</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Who We Are</FooterLinkTitle>
            <FooterLink to='/'>About Us</FooterLink>
            <FooterLink to='/'>Press</FooterLink>
            <FooterLink to='/'>Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to='//www.facebook.com/sixfeetsupplies'>Start a Chapter</FooterLink>
            <FooterLink to='//www.twitter.com/SixFeetSupplies'>Registered Chapters</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <img src={logo} alt="" style={{width: "18%"}}/>
            
          </SocialLogo>
          <WebsiteRights>© Copyright 2020 Six Feet Supplies</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/sixfeetsupplies' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/6feetsupplies' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.twitter.com/SixFeetSupplies' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.twitter.com/SixFeetSupplies' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </MainFooterContainer>
  );
}

export default Footer;
