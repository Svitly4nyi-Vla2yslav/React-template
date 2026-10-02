import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Надає функцію переходу до секції з урахуванням маршруту та фіксованого хедера.
 * На поточній сторінці прокручує DOM до елемента, а для іншої спочатку змінює URL;
 * також обробляє hash після навігації через коротку затримку для завершення рендерингу.
 */
export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Приймає id секції та необов'язковий шлях. Нічого не повертає:
   * або виконує плавну прокрутку з відступом 100 px, або запускає навігацію з hash.
   */
  const scrollTo = (id: string, path: string = location.pathname) => {
    // Якщо ми вже на потрібній сторінці
    if (location.pathname === path) {
      const element = document.getElementById(id);
      if (element) {
        // Плавний скрол з offset для фіксованого хедера
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    } 
    // Якщо потрібно перейти на іншу сторінку
    else {
      navigate(`${path}#${id}`);
    }
  };

  // Автоматичний скрол при завантаженні сторінки з hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Невелика затримка для коректного рендеру сторінки
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 50);
      }
    }
  }, [location]);

  return { scrollTo };
};