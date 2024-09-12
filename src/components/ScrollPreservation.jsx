import { useEffect } from 'react';

const ScrollPreservation = ({ children }) => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      const scrollPosition = window.pageYOffset.toString();
      sessionStorage.setItem('scrollPosition', scrollPosition);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
      }, 0);
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return children;
};

export default ScrollPreservation;