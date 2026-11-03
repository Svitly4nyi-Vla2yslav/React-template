import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Повертає `scrollTo` для переходу до секції з урахуванням маршруту та 100 px фіксованого хедера.
 * На поточній сторінці шукає DOM-елемент, а для іншої запускає React Router навігацію з hash.
 * Після зміни location окремий ефект обробляє hash через 50 ms, щоб сторінка встигла відрендеритися.
 */
export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Приймає id секції та необов'язковий шлях. Нічого не повертає:
   * або виконує плавну прокрутку з відступом 100 px, або запускає навігацію з hash.
   */
  const scrollTo = (id: string, path: string = location.pathname) => {
    // На поточному шляху відсутній id означає безпечну відсутність дії.
    if (location.pathname === path) {
      const element = document.getElementById(id);
      if (element) {
        // `offsetTop - 100` залишає секцію нижче фіксованого хедера.
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // Інший шлях лише змінює URL; фактичне прокручування виконає effect після рендерингу.
      navigate(`${path}#${id}`);
    }
  };

  // Обробляє hash після кожної зміни location; відкладений callback не має окремого cleanup.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Невелика затримка дає цільовій сторінці завершити рендеринг.
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