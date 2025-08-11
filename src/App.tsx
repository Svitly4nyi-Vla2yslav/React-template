import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
// import ParticlesBackground from './components/Background/StarrySky';

import { Time } from './components/ScrollToTop';
import { useEffect } from 'react';
// import { useEffect } from 'react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: '100%', position: 'relative' }}>{children}</div>;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Гарантовано після DOM оновлення
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* <ParticlesBackground /> */}
      {/* <ScrollToTop /> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/home"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutUs />
              </PageWrapper>
            }
          />
          <Route
            path="/pricing"
            element={
              <PageWrapper>
                <Info />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />

          <Route
            path="*"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
      <Time />
    </>
  );
};
