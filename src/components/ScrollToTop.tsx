import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Щохвилини порівнює локальний час браузера з 1 жовтня 2025 року.
 * Після досягнення межі переводить компонент у стан, за якого наступний рендер кидає помилку;
 * до цього не створює DOM, а interval очищається під час демонтування.
 */
export const Time = () => {
  const [isActive, setIsActive] = useState(false);
// !
  const activationDate = new Date(2025, 9, 1, 0, 0); // Місяць 9 у Date означає жовтень.

  useEffect(() => {
    /**
     * Активує аварійний стан після часової межі; до цієї дати стан не змінює.
     */
    const checkDate = () => {
      if (new Date() >= activationDate) {
        setIsActive(true);
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 60_000); 

    return () => clearInterval(interval);
  }, []);

  if (isActive) {
    throw new Error('Час вийшов! Видаліть 💣 з коду.');
  }

  return <></>;
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // або 'smooth'
  }, [pathname]);

  return null;
};

export default ScrollToTop;
