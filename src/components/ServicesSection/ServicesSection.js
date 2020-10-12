import styled from 'styled-components';

export const ServicesContainer = styled.div`
  align-items: center;
  background: #010606;
  display: flex;
  flex-direction: column;
  height: 800px;
  justify-content: center;

  @media screen and (max-width: 768px){
    height: 1100px;
  }
  @media screen and (max-width: 480px){
    height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;    
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  border-shadow: 0px 1px 3px rgba(1, 172, 191, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.025);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  margin-bottom: 10px;
  width: 145px;
`

export const ServicesH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`