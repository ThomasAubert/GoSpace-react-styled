import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  align-items: center;
  background: #000;
  display: flex;
  height: 80px;
  justify-content: center;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavBarContainer = styled.div`
 display: flex;
 height: 80px;
 justify-content: space-between;
 max-width: 1100px;
 padding: 0 24px;
 width: 100%;
 z-index: 1;
`
export const NavLogo = styled(LinkRouter)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: flex-start;
  margin-left: 24px;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    postion: absolute;
    right: 0;
    top: 0;    
    transform: translate(-100%, 35%);
  }
`

export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-right: 22px;
  text-align: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkScroll)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;

  &:hover{
    color: #01acbf;
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 3px solid #01acbf;
  }
`

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  background: #01acbf;
  border: none;
  border-radius: 50px;
  color: #010606;
  curser: pointer;
  font-size: 16px;
  outline: none;
  padding: 10px 22px;
  text-decoration: none;
  white-space: nowrap;

  transition: all 0.2s ease-in-out;

  &:hover{
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`