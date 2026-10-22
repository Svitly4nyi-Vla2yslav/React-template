import React from 'react';
import { AboutContainer } from './AboutUs.styled';


/**
 * Рендерить порожній контейнер сторінки «Про нас» як точку розширення шаблону.
 * Компонент не приймає props, не містить видимого контенту й не виконує побічних
 * ефектів; майбутнє наповнення має залишатися всередині `AboutContainer`.
 */
const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
   
    </AboutContainer>
  );
};

export default AboutUs;
