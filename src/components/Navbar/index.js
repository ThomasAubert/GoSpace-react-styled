import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu,
  NavItem, NavLinks, NavBtn, NavBtnLink } from './Navbar';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>
            GoSpace
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>
                Services
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/joinus'>Join Us</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
