import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from '@emotion/styled';
import { withSize } from 'react-sizeme'
import { Layout as AntLayout, Spin, Icon } from 'antd';
import { useScrollPercentage } from 'react-scroll-percentage'
import { motion, AnimatePresence } from "framer-motion";

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
  position: relative;
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
    bottom: 30px;
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

    .social a:first-child {
      margin-right: 10px;
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


          div:nth-child(-n+3) {
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
          div:nth-child(-n+3) {
              margin-right: 10px;
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
          height: 26px;
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
  const isFullProcess = router.query.show === "fullprocess"
  const showScrollTop = percentage > 0.30 && isFullProcess
  const isResponsive = size.width < 1024

  useEffect(() => {
    if (process.browser) {
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
          <title>{title}</title>
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
                <h1 className="title">I solve problems for people.</h1>
                <p>Hi, I’m JC Pratt-Delzenne.</p>
                <p>I research, design, and build valuable software products to empower users and increase business growth.</p>
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
                  <div className="tag saia">Case Study</div>
                </div>}
                <div className="info">
                  {!isResponsive && <div className="tag saia">Case Study</div>}
                  <div className="year">
                    {!isResponsive && <HistoryOutlined />}
                    {isResponsive && <HistoryOutlined style={{ fontSize: '14px' }} />}
                    <span>2019</span>
                  </div>
                  <div className="model">
                    {!isResponsive && <DollarCircleOutlined />}
                    {isResponsive && <DollarCircleOutlined style={{ fontSize: '14px' }} />}
                    <span>SaaS</span>
                  </div>
                  <div className="link">
                    {!isResponsive && <LinkOutlined />}
                    {isResponsive && <LinkOutlined style={{ fontSize: '14px' }} />}
                    <Link href="https://saia.ai" scroll={false} prefetch={false}>
                      <a target="_blank">Saia.ai</a>
                    </Link>
                  </div>
                </div>
                <p>Saia is a software for blog content writers. It guides them through the process of writing an article to increase their blog's organic traffic.</p>
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
                  <div className="tag persona">Case Study</div>
                </div>}
                <div className="info">
                  {!isResponsive && <div className="tag persona">Case Study</div>}
                  <div className="year">
                    {!isResponsive && <HistoryOutlined />}
                    {isResponsive && <HistoryOutlined style={{ fontSize: '14px' }} />}
                    <span>2020</span>
                  </div>
                  <div className="model">
                    {!isResponsive && <DollarCircleOutlined />}
                    {isResponsive && <DollarCircleOutlined style={{ fontSize: '14px' }} />}
                    <span>Free</span>
                  </div>
                  <div className="link">
                    {!isResponsive && <LinkOutlined />}
                    {isResponsive && <LinkOutlined style={{ fontSize: '14px' }} />}
                    <Link href="https://your-persona.com" scroll={false} prefetch={false}>
                      <a target="_blank">Your-persona.com</a>
                    </Link>
                  </div>
                </div>
                <p>Persona is a science-based personality test to help people in their personal growth journey.</p>
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
        <p>&copy;{new Date().getFullYear()} Send me a 🍺 at prattdelzennejc@gmail.com</p>
      </PageFooter>
    </PageLayout>
  )
}

export default withSize()(Layout)