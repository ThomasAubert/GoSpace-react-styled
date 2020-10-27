import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu,
  NavItem, NavLinks, NavBtn, NavBtnLink } from './Navbar';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const onScroll = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
    
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            GoSpace
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={40}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={40}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
               smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={40}
              >
                Services
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/joinus'>Join Us</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
