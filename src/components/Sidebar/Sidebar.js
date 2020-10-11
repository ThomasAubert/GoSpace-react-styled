import styled from 'styled-components';
import{ FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  align-items: center;
  background: #0d0d0d;
  display: grid;
  height: 100%;
  left: 0;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  position: fixed;
  top: 0;
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
  width: 100%;
  z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: center;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #01acbf;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtn = styled.div`
  display: flex;
  justify-content: center;
`

export const SideBtnLink = styled(LinkRouter)`
  background: #01acbf;
  border: none;
  border-radius: 50px;
  color: #010606;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 16px 64px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover{
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`
