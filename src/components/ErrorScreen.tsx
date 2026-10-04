import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ErrorContainer = styled(motion.div)`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  user-select: none;
`;

// Одноразове горизонтальне тремтіння привертає увагу після появи повідомлення.
const shakeAnimation = {
  x: [0, -10, 10, -10, 10, 0],
  transition: { 
    duration: 0.6, 
    // Літеральний тип зберігає сумісність значення з контрактом easing у Framer Motion.
    ease: "easeInOut" as const
  }
};

interface ErrorScreenProps {
  message: string;
}

// Компонент приймає текст помилки та повертає повноекранне повідомлення.
// role="alert" і aria-live="assertive" спонукають допоміжні технології оголосити його негайно.
const ErrorScreen: React.FC<ErrorScreenProps> = ({ message }) => (
  <ErrorContainer {...shakeAnimation} role="alert" aria-live="assertive">
    Помилка: {message}
  </ErrorContainer>
);

export default ErrorScreen;
