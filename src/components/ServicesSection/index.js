import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesSection';
import Icon1 from '../../images/img3.svg';
import Icon2 from '../../images/img4.svg';
import Icon3 from '../../images/img3.svg';

const ServicesSection = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>
        Our Services
      </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>
              Space Campus
            </ServicesH2>
            <ServicesP>
              Live your best life and meet people like you
            </ServicesP>            
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>
              Distance Learning
            </ServicesH2>
            <ServicesP>
              If you can't be come to us, we will come to you
            </ServicesP>            
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>
              Mentor Programme
            </ServicesH2>
            <ServicesP>
              Give back to your peers and help the community
            </ServicesP>            
          </ServicesCard>
        </ServicesWrapper>            
    </ServicesContainer>
  )
}

export default ServicesSection;
