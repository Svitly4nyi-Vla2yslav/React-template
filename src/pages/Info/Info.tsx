import React from 'react';
import { InfoContainer } from './Info.styled';


/**
 * Повертає стилізований контейнер зарезервованого інформаційного маршруту.
 * Сторінка навмисно не має вмісту, props, стану чи побічних ефектів і слугує точкою розширення шаблону.
 */
const Info: React.FC = () => {
  return <InfoContainer   id='app' >
   
  </InfoContainer>;
};

export default Info;
