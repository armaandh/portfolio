import ReactGA from 'react-ga'
// import { hotjar } from 'react-hotjar';

export const initAnalytics = () => {
  console.log('GA init')
  ReactGA.initialize('UA-155177692-2')
}
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
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