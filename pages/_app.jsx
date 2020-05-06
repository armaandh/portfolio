import 'antd/dist/antd.css';
import 'react-image-lightbox/style.css';

import { ConfigProvider } from 'antd';
import enGB from 'antd/lib/locale/en_GB';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';

import { theme } from '../utils/theme';

class MyApp extends App {

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <ConfigProvider locale={enGB}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ConfigProvider>
    )
  }
}

export default MyApp