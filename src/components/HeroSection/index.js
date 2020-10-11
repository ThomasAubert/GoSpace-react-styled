import React, {useState} from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSection';
import {Button} from '../ButtonElem';
import Video from '../../videos/space.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Space Exploration</HeroH1>
        <HeroP>
          Be part of this incredible journey
        </HeroP>
        <HeroBtnWrapper>
          <Button to='joinus' onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true' dark='true'>
            Join us now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
