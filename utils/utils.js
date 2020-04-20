import { useWindowWidth } from '@react-hook/window-size';

export const traitScore = (score, count) => Math.floor((score / (count * 5)) * 100)
export const findByDomain = (domain, personality) => personality ? personality.find(p => p.domain === domain) : null

const rexp = new RegExp('<br /><br />|<br /><br/>|<br/><br/>')
export const splitText = (description) => description.split(rexp)

export const useMobileViewportWidth = () => {
  const VWidth = useWindowWidth()
  const isResponsiveScreen = VWidth <= 1024 ? VWidth : false
  const isPhoneScreen = isResponsiveScreen && (VWidth <= 414)
  return {
    isResponsiveScreen,
    isPhoneScreen,
    VWidth,
  }

  // if (VWidth <= 1024) return VWidth
  // return false
}