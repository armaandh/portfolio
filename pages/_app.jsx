import 'antd/dist/antd.css';
import 'react-image-lightbox/style.css';
import i18n from '../i18n';

import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
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
          <I18nextProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nextProvider>
        </ThemeProvider>
      </ConfigProvider>
    )
  }
}

export default MyApp