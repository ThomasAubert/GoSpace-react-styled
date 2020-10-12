import React from 'react';
import { Button } from '../ButtonElem';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Topline, Heading, Subtitle, BtnWrapper, Column2, ImgWrapper, Img} from './InfoSection';

const InfoSection = ({
  lightBg, id, imgStart, topline, headline, lightText, description, darkText, buttonLabel, imgSrc, imgAlt, primary, dark, dark2
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
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 :0}
                  >
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
