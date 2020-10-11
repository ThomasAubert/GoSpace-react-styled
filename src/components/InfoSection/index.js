import React from 'react';
import { Button } from '../ButtonElem';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Topline, Heading, Subtitle, BtnWrapper, Column2, ImgWrapper, Img} from './InfoSection';

const InfoSection = ({
  lightBg, id, imgStart, topline, headline, lightText, description, darkText, buttonLabel, imgSrc, imgAlt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topline}</Topline>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText}>
                  {description}
                </Subtitle>
                <BtnWrapper>
                  <Button to='home'>
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={imgSrc} alt={imgAlt}/>
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
