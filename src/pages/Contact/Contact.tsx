import React from 'react';
import { ContactContainer } from './Contact.styled';
import ContactForm from '../../components/ContactComponents/ContactForm';

/**
 * Монтує демонстраційну ContactForm у контейнері контактного маршруту.
 * Сторінка не дублює стан форми та не виконує власних запитів або навігації.
 */
const Contact: React.FC = () => {
  return (
    <ContactContainer  id='ap'>
      <ContactForm />
     
    </ContactContainer>
  );
};

export default Contact;
