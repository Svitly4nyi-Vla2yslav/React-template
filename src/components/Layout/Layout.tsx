import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Обгортає дочірній маршрут спільними Header і Footer та показує його через Outlet.
 * Після зміни pathname прокручує сторінку на початок або, якщо URL містить hash,
 * після 400 мс переходить до цільового елемента. Компонент не має локального стану.
 */
export const Layout: React.FC = () => {
  const location = useLocation();


  // Затримка дає вкладеному маршруту час змонтувати цільову секцію перед scrollIntoView.
  useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  } else {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }
  }, [location.pathname]); // Hash читається лише під час зміни pathname.

  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
