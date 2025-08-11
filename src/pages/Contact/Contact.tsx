import React from 'react';
import { ContactContainer } from './Contact.styled';
import ContactForm from '../../components/ContactComponents/ContactForm';

const Contact: React.FC = () => {
  return (
    <ContactContainer  id='ap'>
      <ContactForm />
     
    </ContactContainer>
  );
};

export default Contact;
