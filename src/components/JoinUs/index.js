import React from 'react';
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './JoinUs';

const JoinUs = () => {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to='/'>GoSpace</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Join Us Now</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required/>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='text' required/>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot you password?</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  )
}

export default JoinUs;
