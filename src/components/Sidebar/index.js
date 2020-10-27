import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtn, SideBtnLink } from './Sidebar';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}
          >
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}
          >
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-20}
          >
            Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtn>
          <SideBtnLink to='/joinus'>Join Us</SideBtnLink>
        </SideBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
