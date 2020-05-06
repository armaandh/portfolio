import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useWindowWidth } from '@react-hook/window-size';

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

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
export const ScrollToTopController = () => {
  // this assumes that current router state is accessed via hook
  // but it does not matter, pathname and search (or that ever) may come from props, context, etc.
  const  { pathname, search } = useRouter();
  
  // just run the effect on pathname and/or search change
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        // behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  
  // renders nothing, since nothing is needed
  return null;
};

export const scrollTop = () => {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}

export const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    left: 0,
    behavior: 'smooth'
  });
}