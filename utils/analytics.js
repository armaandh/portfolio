import ReactGA from 'react-ga'
import { hotjar } from 'react-hotjar';

export const initAnalytics = () => {
  console.log('GA init')
  ReactGA.initialize('UA-155177692-2')
  hotjar.initialize(1813828, 6);
}
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  // CRISP CHAT
  window.$crisp = []
  window.CRISP_WEBSITE_ID = "5a23ecdd-d01f-4aea-87b2-480021d26264"

  (function() {
    var d = document
    var s = d.createElement("script")

    s.src = "https://client.crisp.chat/l.js"
    s.async = 1
    d.getElementsByTagName("head")[0].appendChild(s)
  })()
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}