import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #01acbf;
`

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 40px 24px;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px){
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.ul`
  display: flex;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  width: 160px;

  @media screen and (max-width: 480px){
    margin: 0;
    padding: 10px;
    width: 100%
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 1.5rem;
`

export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover{
    color: #010606;
    transition: 0.2s ease-in-out;
  }
`
export const SocialMediaContainer = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0 auto;
  max-width: 1100px;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: start;
  margin-bottom: 16px;
  text-decoration: none;
`

export const Copyrights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 240px;
`

export const SocialInLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover{
    color: #010606;
    transition: 0.2s ease-in-out;
`