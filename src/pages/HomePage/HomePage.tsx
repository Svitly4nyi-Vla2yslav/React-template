import FeedbackFormComponent from '../../components/ContactComponents/FeedbackFormComponent';

import Hero from '../../components/Hero/Hero';

import { HomeContainer } from './HomePage.styled';
import React from 'react';



/**
 * Збирає домашню сторінку з hero-блоком і демонстраційною feedback-формою.
 * Компонент не приймає аргументів і повертає секцію з id=hero без власного стану.
 */
const Home: React.FC = () => {
  
  return (
    <>
      <HomeContainer   id="hero">
        <Hero />
      
        <FeedbackFormComponent/>
       
      </HomeContainer>
    </>
  );
};

export default Home;

