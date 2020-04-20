import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from '@emotion/styled';
import { Layout as AntLayout, Spin, Icon } from 'antd';


// import { initAnalytics, logPageView } from '../../utils/analytics'

import Logo from '../../public/logos/logo-desktop.svg';

const { Header, Footer } = AntLayout;

const PageLayout = styled(AntLayout)`
  position: relative;
  max-width: 1024px;
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
`

const PageHeader = styled(Header)`
  width: 100%;
  height: auto;
  padding: 35px 60px 46px 60px;
  line-height: normal;
  background-color: white;
`

const PageFooter = styled(Footer)`
  background-color: transparent;
  text-align: center;
`;

export default function Layout({ children, title, backButton }) {
  useEffect(() => {
    if (process.browser) {
      // if (!window.GA_INITIALIZED) {
      //   initAnalytics()
      //   window.GA_INITIALIZED = true
      // }
      // logPageView()
    }
  }, [])

  return (
    <PageLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="layout-container">
        <PageHeader>
          <nav>
            <Link href="/" scroll={false}>
              <a>
                <Logo width={"34"} height="32" viewBox="0 0 34 32" />
                <span className="main-title">JC Pratt-Delzenne</span>
              </a>
            </Link>
          </nav>
        </PageHeader>
        {children}
        <PageFooter>
          <p>Send me a 🍺 at prattdelzennejc@gmail.com {new Date().getFullYear()}</p>
        </PageFooter>
      </div>
    </PageLayout>
  )
}