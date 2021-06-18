import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const getScrollTop = () => {
  if (process.browser) {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
};

export const useHeaderSticky = () => {
  const [sticky, setSticky] = useState(getScrollTop() > 0);

  useEffect(() => {
    const scrollListener = () => {
      if (sticky !== getScrollTop() > 0) {
        setSticky(!sticky);
      }
    };
    scrollListener();
    window?.addEventListener('scroll', throttle(scrollListener));

    return () => window?.removeEventListener('scroll', scrollListener);
  }, [sticky]);

  return sticky;
};
