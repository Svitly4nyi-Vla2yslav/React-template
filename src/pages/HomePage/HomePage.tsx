import FeedbackFormComponent from '../../components/ContactComponents/FeedbackFormComponent';

import Hero from '../../components/Hero/Hero';

import { HomeContainer } from './HomePage.styled';
import React from 'react';



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
