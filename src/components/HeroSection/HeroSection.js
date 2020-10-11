import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

// BACKGROUND
export const HeroContainer = styled.div`
  align-items: center;
  background: #0c0c0c;
  display: flex;
  height: 800px;
  justify-content: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;

  :before{
  content: '';
  postion: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0.2) 0%, 
    rgba(0, 0, 0, 0.8) 100%
    ), 
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  z-index: 2;
  } 
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  background: #232a34;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

// CONTENT
export const HeroContent = styled.div`
  align-items:center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 8px 24px;
  position: absolute;
  z-index: 3
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  margin-top: 24px;
  max-width: 600px;
  text-align: center;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: columns;
  margin-top: 32px;
`

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 10px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 10px;
`