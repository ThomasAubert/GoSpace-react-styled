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
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
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
