import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  align-items: center;
  background: ${({primary})=> (primary ? '#01acbf' : '#010606')};
  border: none;
  border-radius: 50px;
  color: ${({dark})=> (dark ? '#010606' : '#fff')};
  cursor: pointer;
  display: flex;
  padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
  font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
  justify-content: center;
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover{
    background: ${({primary})=> (primary ? '#fff' : '#01acbf')};
    transition: all 0.2s ease-in-out;
  }
`