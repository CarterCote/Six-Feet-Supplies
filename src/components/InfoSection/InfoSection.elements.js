import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 15px 0 65px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#dedede')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const HeroColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 85%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const InfoColumn = styled.div`
  margin-bottom: 2px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 85%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const ImageColumn = styled.div`
  margin-bottom: 2px;
  padding-right: 0px;
  padding-left: 15px;
  flex: 1;
  max-width: 45%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const IconColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 5px;
  padding-left: 20px;
  flex: 1;
  max-width: 5%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CardIcon = styled.div`
  ${'' /* margin: 24px 0; */}
  size: 100%;
  color: #fb7131;
`;

export const TextWrapper = styled.div`
  max-width: 1000px;
  padding-top: 60px;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const HeadingTextWrapper = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-top: 60px;
  padding-bottom: 0px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;

  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  ${'' /* border: 0; */}
  border: 8px solid white;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #454545;

  ${'' /* border-color: #000; */}
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#3078BE' : '#000000')};
`;

export const Subheading = styled.h1`
  ${'' /* max-width: 600px; */}
  margin-bottom: 5px;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#3078BE' : '#000000')};
`;

export const SpacedHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  letter-spacing: 8px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#3078BE' : '#000000')};
`;


export const Subtitle = styled.p`
  ${'' /* max-width: 600px; */}
  margin-bottom: 35px;
  font-size: ${({ fontSmall }) => (fontSmall ? '20px' : '24px')};
  line-height: 1.3;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#3078BE' : '#000000')};
`;
