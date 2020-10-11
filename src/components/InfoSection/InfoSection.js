import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({lightBg})=> (lightBg ? '#f9f9f9' : '#010606')};
  color: #fff;

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  height: 860px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`

export const InfoRow = styled.div`
align-items: center;
display: grid;
grid-auto-columns: minmax(auto, 1fr);
grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
  grid-template-areas: ${({imgStart})=> (imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Topline = styled.p`
  color: #01acbf;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 16px;
  margin-bottom: 16px;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 24px;

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  color: ${({darkText})=> (darkText ? '#010606' : '#fff')};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 440px;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrapper = styled.div`
  height: 100%;
  max-width: 555px;
`

export const Img = styled.img`
  margin: 0 0 10px 0;
  padding-right: 0;
  width: 100%;
`