import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="I research, design and build valuable software solutions to empower users and increase product growth." />
          <link href="https://fonts.googleapis.com/css?family=Spartan:400,700,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>{`
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            ol, ul {
              list-style: none;
            }
            blockquote, q {
              quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
              content: '';
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            html,body {
              min-height: 100vh;
            }
            body {
              font-family: 'Spartan', sans-serif;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizelegibility;
              background-color: #F2F8FF;
            }
            
            #__next {
              display flex;
              flex-direction: column;
              align-items: center;
            }

          `}</style>
        </body>
      </html>
    )
  }
}