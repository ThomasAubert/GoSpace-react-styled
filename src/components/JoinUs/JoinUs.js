import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
   background: #141212;
   min-height: 692px;
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   overflow: hidden;
   z-index: 0;
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media and screen (max-width: 480px){
    height: 80%;
  }
`
export const Icon = styled(Link)`
  color: #01acbf;
  font-size: 32px;
  font-weight: bold;
  margin: 32px 0 0 32px;
  text-decoration: none;

  @media and screen (max-width: 480px){
    margin: 8px 0 0 16px;
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media and screen (max-width: 480px){
    padding: 10px;
  }
`
export const Form = styled.form`
  background: #01acbf;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  display: grid;
  height: auto;
  margin: 0 auto;
  padding: 80px 32px;
  max-width: 400px;
  width: 100%;
  z-index: 1;

  @media and screen (max-width: 480px){
    padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
  color: #141212;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: center;
`
export const FormLabel = styled.label`
  color: #141212;
  font-size: 16px;
  margin-bottom: 10px;
`
export const FormInput = styled.input`
  border: none;
  border-radius: 5px;
  margin-bottom: 32px;
  padding: 16px 16px;
`
export const FormButton = styled.button`
  background:#141212;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: ponter;
  font-size: 22px;
  margin-top: 16px;
  padding: 16px 0px;
`
export const Text = styled.span`
  color: #fff;
  font-size: 14px;
  margin-top: 24px;
  text-align: center;
`
