import React from 'react';
import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaContainer, SocialMediaWrapper, SocialLogo, SocialIcons, SocialInLink, Copyrights} from './Footer';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/'>
                  Who we are
                </FooterLink>
                <FooterLink to='/'>
                 Where we are
                </FooterLink>
                <FooterLink to='/'>
                 What we do
                </FooterLink>
                <FooterLink to='/'>
                  Terms & Conditions
                </FooterLink>              
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/'>
                  Contact
                </FooterLink>
                <FooterLink to='/'>
                 Training center
                </FooterLink>
                <FooterLink to='/'>
                 Operations
                </FooterLink>
                <FooterLink to='/'>
                  Housing
                </FooterLink>              
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              GoSpace
            </SocialLogo>
            <Copyrights>&copy; GoSpace {new Date().getFullYear()} - Created by Thomas Aubert</Copyrights>
            <SocialIcons>
              <SocialInLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialInLink>
              <SocialInLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialInLink>
              <SocialInLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialInLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMediaContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;
