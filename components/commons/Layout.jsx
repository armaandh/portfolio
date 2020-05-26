import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from '@emotion/styled';
import { withSize } from 'react-sizeme'
import { Layout as AntLayout, Menu, Dropdown, Spin, Icon, } from 'antd';
import { useScrollPercentage } from 'react-scroll-percentage'
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

import {
  HistoryOutlined,
  DollarCircleOutlined,
  LinkOutlined,
} from '@ant-design/icons';

import { initAnalytics, logPageView } from '../../utils/analytics'

import Logo from '../../public/logos/logo-desktop.svg';
import SaiaLogo from '../../public/logos/saia-logo.svg';
import PersonaLogo from '../../public/logos/persona-logo.svg';
import Linkedin from '../../public/icons/linkedin.svg';
import Twitter from '../../public/icons/twitter.svg';
import ArrowUp from '../../public/icons/arrow-up.svg';
import Lang from '../../public/icons/lang.svg';
import { cssShadowDefault } from "../../utils/theme";
import { scrollTop, ScrollToTopController } from "../../utils/utils";

const { Header, Footer } = AntLayout;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ContentLayout = styled(AntLayout)`
  /* position: relative; */
  max-width: 1124px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor};
  overflow: hidden;
  .main-title {
    display: none;
  }
  .layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }

  .scroll-top {
    position: fixed;
    right: 20px;
    bottom: 80px;
    width: 67px;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 67px;
    background: white;
    cursor: pointer;
    ${cssShadowDefault};
  }


  /* RESPONSIVE */
  @media only screen and (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media only screen and (max-width: 540px) {
    .scroll-top {
      right: 8px;
      bottom: 68px;
    }
  }
  
`

const PageHeader = styled(Header)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: ${props => props.caseStudy ? "20px 30px 90px 30px" : "20px 30px 90px 30px"};
  line-height: normal;
  background-color: white;
  border-radius: 0px 0px 45px 45px;
  ${cssShadowDefault};

  nav {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 55px;

    .social {
      display: flex;
      align-items: center;

      .language {
        display: flex;
        align-items: center;
        margin-right: 18px;
        cursor: pointer;

        .lang:hover {
          text-decoration: underline;
        }
      }

      a:first-of-type {
        margin-right: 10px;
      }
    }
  }

  .content {
    align-self: center;
    max-width: 685px;

    .title {
      font-weight: 900;
      letter-spacing: 0.9px;
      font-size: 42px;
      margin-bottom: 45px;
    }

    p:first-of-type {
      margin-bottom: 15px;
    }

    & > p {
      line-height: 30px;
    }

    &.case-study {
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        span {
          padding-top: 4px;
          margin-left: 15px;
        }
      }

      p:first-of-type {
        margin-bottom: 0;
      }

      .info {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          div {
            span, a {
              font-size: 22px;
              color: #62748E;
              font-weight: 500;
            }

            span:last-of-type {
              margin-left: 5px;
            }

            a {
              margin-left: 5px;
              text-decoration: underline;
            }
          }


          div:nth-of-type(-n+3) {
            margin-right: 25px;
          }

          .tag {
            padding: 11px 25px 8px 25px;
            background: #E7DDFD;
            font-size: 14px;
            border-radius: 20px;

            &.saia {
              background: #E7DDFD;
              color: #6222F5;
            }

            &.persona {
              background: #DBF0FF;
              color: #0084E8;
            }
          }
        }
    }
  }


  /* RESPONSIVE */
  @media only screen and (max-width: 1024px) {
    border-radius: 0px 0px 30px 30px;
    padding: ${props => props.caseStudy ? "15px 25px 35px 25px" : "15px 25px 35px 25px"};

    nav {
      margin-bottom: 20px;
      .social {
        .language {
          margin-right: 10px;
          .lang {
            font-size: 14px;
          }
        }
      }
    }

    .content {
      align-self: center;
      max-width: auto;

      & > p {
        line-height: initial;
      }
      
      .title {
        font-weight: 900;
        letter-spacing: 0.56px;
        font-size: 26px;
        margin-bottom: 15px;
      }

      p:first-of-type {
        margin-bottom: 10px;
      }

      &.case-study {
        .title {
          font-weight: 900;
          letter-spacing: 0.56px;
          font-size: 26px;
          margin-bottom: 15px;
        }

        p:first-of-type {
          margin-bottom: 0px;
        }

        .info {
          div:nth-of-type(-n+3) {
              margin-right: 6px;
          }
          div {
            span, a {
              font-size: 18px;
            }
          }
        }
      }


      .mobile-title {
        display: flex;
        justify-content: space-between;

        .title span  {
          margin-left: 6px;
        }

        .tag {
          height: 30px;
          padding: 7px 16px 7px 16px;
          background: #E7DDFD;
          font-size: 15px;
          border-radius: 20px;

          &.saia {
            background: #E7DDFD;
            color: #6222F5;
          }

          &.persona {
            background: #DBF0FF;
            color: #0084E8;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .content {
      
      .title {
        letter-spacing: 0.43px;
        font-size: 20px;
      }


      &.case-study {
        .title {
          letter-spacing: 0.43px;
          font-size: 20px;
        }

        .info {
          div {
            span, a {
              font-size: 12px;
            }
          }
        }
      }


      .mobile-title {
        .tag {
          height: 26px;
          font-size: 10px;
        }
      }
    }
  }
`

const PageFooter = styled(Footer)`
  width: 100%;
  border-top: 1px solid #D1E6FF;
  background-color: transparent;
  text-align: center;
`;

function Layout({ children, title, home, h1, text, caseStudy, backButton, size }) {
  const [ref, percentage] = useScrollPercentage()
  const router = useRouter()
  const { t, i18n } = useTranslation()
  const isFullProcess = router.query.show === "fullprocess"
  const showScrollTop = percentage > 0.18 && isFullProcess
  const isResponsive = size.width < 1024
  const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
  const setLang = (lang) => {
    window.localStorage.setItem("myLang", lang)
    i18n.changeLanguage(lang)
    // window.location.reload()
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setLang('en')}>
        English
      </Menu.Item>
      <Menu.Item onClick={() => setLang('fr')}>
        Français
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (process.browser && process.env.PROD) {
      if (!window.GA_INITIALIZED) {
        initAnalytics()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }, [])

  return (
    <PageLayout ref={ref}>
      <ContentLayout>
        <Head>
          <meta name="description" content={t('home.header.description')} />
          <meta property="og:description" content={t('home.header.description')} />
          <meta name="title" content={title} />
          <meta property="twitter:description" content="I research, design and build valuable software solutions to empower users and increase business growth." />
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
          <title>{title}</title>
          {process.env.PROD && <script dangerouslySetInnerHTML={{__html: `window.$crisp=[];window.CRISP_WEBSITE_ID="5a23ecdd-d01f-4aea-87b2-480021d26264";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();` }} />}
        </Head>
        <ScrollToTopController />
        <div className="layout-container">
          <motion.div
            className="home"
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 160,
              damping: 22
            }}
          >
            <PageHeader>
              <nav>
                <Link href="/" scroll={false}>
                  <a>
                    {!isResponsive && <Logo width="34" height="32" viewBox="0 0 34 32" />}
                    {isResponsive && <Logo width="21" height="20" viewBox="0 0 34 32" />}
                    <span className="main-title">JC Pratt-Delzenne</span>
                  </a>
                </Link>
                <div className="social">
                <Dropdown overlayClassName="language-dropdown" overlay={menu} trigger={['click']}>
                  <div className="language">
                    {!isResponsive && <Lang width="24" height="24" viewBox="0 0 24 24" />}
                    {isResponsive && <Lang width="16" height="16" viewBox="0 0 24 24" />}
                    <span className="lang">
                    {getCurrentLng() === 'fr' ? 'Français' : 'English'}
                    </span>
                  </div>
                </Dropdown>
                  <Link href="https://www.linkedin.com/in/jean-claude-pratt-delzenne-5687646b/" scroll={false} prefetch={false}>
                    <a target="_blank">
                      {!isResponsive && <Linkedin width="50" height="49" viewBox="0 0 52 51" />}
                      {isResponsive && <Linkedin width="30" height="30" viewBox="0 0 52 51" />}
                    </a>
                  </Link>
                  <Link href="https://twitter.com/delzennejc" scroll={false} prefetch={false}>
                    <a target="_blank">
                      {!isResponsive && <Twitter width="50" height="49" viewBox="0 0 52 51" />}
                      {isResponsive && <Twitter width="30" height="30" viewBox="0 0 52 51" />}
                    </a>
                  </Link>
                </div>
              </nav>
              {!caseStudy && home && <div className="content">
                <h1 className="title" dangerouslySetInnerHTML={{ __html:t('home.header.title') }}></h1>
                <p>{t('home.header.introduce')}</p>
                <p>{t('home.header.description')}</p>
              </div>}
              {!caseStudy && !home && <div className="content">
                <h1 className="title">{h1}</h1>
                <p>{text}</p>
              </div>}
              {caseStudy === "saia" && <div className="content case-study">
                {!isResponsive && <h1 className="title">
                  <SaiaLogo width="47" height="47" viewBox="0 0 49 49" />
                  <span>Saia.ai</span>
                </h1>}
                {isResponsive && <div className="mobile-title">
                  <h1 className="title">
                    <SaiaLogo width="23" height="23" viewBox="0 0 49 49" />
                    <span>Saia.ai</span>
                  </h1>
                  <div className="tag saia">{t('saia.header.tag')}</div>
                </div>}
                <div className="info">
                  {!isResponsive && <div className="tag saia">{t('saia.header.tag')}</div>}
                  <div className="year">
                    {!isResponsive && <HistoryOutlined />}
                    {isResponsive && <HistoryOutlined style={{ fontSize: '14px' }} />}
                    <span>2019</span>
                  </div>
                  <div className="model">
                    {!isResponsive && <DollarCircleOutlined />}
                    {isResponsive && <DollarCircleOutlined style={{ fontSize: '14px' }} />}
                    <span>{t('saia.header.model')}</span>
                  </div>
                  <div className="link">
                    {!isResponsive && <LinkOutlined />}
                    {isResponsive && <LinkOutlined style={{ fontSize: '14px' }} />}
                    <Link href="https://saia.ai" scroll={false} prefetch={false}>
                      <a target="_blank">Saia.ai</a>
                    </Link>
                  </div>
                </div>
                <p>{t('saia.header.description')}</p>
              </div>}
              {caseStudy === "persona" && <div className="content case-study">
                {!isResponsive && <h1 className="title">
                  <PersonaLogo width="47" height="47" viewBox="0 0 49 49" />
                  <span>Persona</span>
                </h1>}
                {isResponsive && <div className="mobile-title">
                  <h1 className="title">
                    <PersonaLogo width="23" height="23" viewBox="0 0 49 49" />
                    <span>Persona</span>
                  </h1>
                  <div className="tag persona">{t('persona.header.tag')}</div>
                </div>}
                <div className="info">
                  {!isResponsive && <div className="tag persona">{t('persona.header.tag')}</div>}
                  <div className="year">
                    {!isResponsive && <HistoryOutlined />}
                    {isResponsive && <HistoryOutlined style={{ fontSize: '14px' }} />}
                    <span>2020</span>
                  </div>
                  <div className="model">
                    {!isResponsive && <DollarCircleOutlined />}
                    {isResponsive && <DollarCircleOutlined style={{ fontSize: '14px' }} />}
                    <span>{t('persona.header.model')}</span>
                  </div>
                  <div className="link">
                    {!isResponsive && <LinkOutlined />}
                    {isResponsive && <LinkOutlined style={{ fontSize: '14px' }} />}
                    <Link href="https://your-persona.com" scroll={false} prefetch={false}>
                      <a target="_blank">Your-persona.com</a>
                    </Link>
                  </div>
                </div>
                <p>{t('persona.header.description')}</p>
              </div>}
            </PageHeader>
          </motion.div>

          {children}

          <AnimatePresence>
            {showScrollTop &&
                <motion.div
                  className="scroll-top"
                  onClick={scrollTop}
                  initial={{ scale: 0 }}
                  animate={{ scale: 0.7 }}
                  exit={{ scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <ArrowUp width="32" height="32" viewBox="-4 -4 32 32" />
                </motion.div>
            }
          </AnimatePresence>
        </div>
      </ContentLayout>
      <PageFooter>
        <p>&copy;{new Date().getFullYear()} {t('footer.text')}</p>
      </PageFooter>
    </PageLayout>
  )
}

export default withSize()(Layout)