import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  Border,
  Container,
  ContainerSocialDemo,
  Cookie,
  CookieContainer,
  Deckstop,
  FooterContainer,
  FooterWrapp,
  HeroButtonGrey,
  Licens,
  Link,
  Logo,
  Point,
  SocialLink,
  SocialWrapper,
  WraperLink,
} from './Footer.styled';


import { PoliciesContent } from './PoliciesContent';
import { useSmoothScroll } from '../../utils/useSmoothScroll';

const Footer: React.FC = () => {
    const { scrollTo } = useSmoothScroll();
  const { t } = useTranslation();
  const [showPolicies, setShowPolicies] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);
  useEffect(() => {
    if (showPolicies && activePolicy) {
      const timer = setTimeout(() => {
        scroller.scrollTo(activePolicy, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showPolicies, activePolicy]);

  const handlePolicyClick = (policy: string) => {
    setActivePolicy(policy);
    setShowPolicies(true);
  };
  

  return (
    <>
      <FooterContainer>
        <FooterWrapp>
          <Container> 
            <Logo  onClick={() => scrollTo('hero', "home")} style={{ marginBottom: 16 }}>
            </Logo>
          </Container>
          <Deckstop>
            <Container>
              <WraperLink>{t('footer.sections.home')}</WraperLink>
              <Link  to="/home/#benefits" >
                {t('footer.links.benefits')}
              </Link>
              <Link  to="/service/all">
                {t('footer.links.service')}
              </Link>
              <Link  to="/pricing#app">
                {t('footer.links.prices')}
              </Link>
            </Container>
            <Container>
              <WraperLink>{t('footer.sections.product')}</WraperLink>
            
            </Container>

            <Container>
              {' '}
              <WraperLink>{t('footer.sections.company')}</WraperLink>
              <Link to="/service#all">
                {t('footer.links.ourServices')}
              </Link>
              <Link to="/about#ap">
                {t('footer.links.aboutUs')}
              </Link>
              <Link to="/contact#ap">
                {t('footer.links.contactUs')}
              </Link>
            </Container>
          </Deckstop>
          <ContainerSocialDemo>
            {' '}
            <Container>
              <WraperLink>{t('footer.sections.demo')}</WraperLink>
              <a
                href="https://sabsus.app/login/demo@sabsus.com/demo2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroButtonGrey>{t('footer.buttons.viewDemo')}</HeroButtonGrey>
              </a>
            </Container>
            <SocialWrapper>
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61578562106724&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/sabsus.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/sabsus/"
                target="_blank"
                rel="noopener noreferrer"
              >
              </SocialLink>
            </SocialWrapper>{' '}
          </ContainerSocialDemo>

          <Border />
          <Licens>
            <CookieContainer>
              <Cookie to="#privacy" onClick={() => handlePolicyClick('privacy')}>
                {t('footer.legal.cookiePolicy')} <Point />{' '}
              </Cookie>
              <Cookie to="#cookie"  onClick={() => handlePolicyClick('cookie')}>
                {t('footer.legal.privacyStatement')} <Point />{' '}
              </Cookie>
              <Cookie to="#terms"  onClick={() => handlePolicyClick('terms')}>
                {t('footer.legal.termsOfUse')}
              </Cookie>
            </CookieContainer>
            <CookieContainer>
              <Cookie to="" >{t('footer.legal.copyright')}</Cookie>
            </CookieContainer>
          </Licens>
        </FooterWrapp>
      </FooterContainer>
      {showPolicies && <PoliciesContent activePolicy={activePolicy} />}
    </>
  );
};

export default Footer;
