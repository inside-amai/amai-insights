import { useEffect } from 'react';
import Index from './Index';

const TechnicalDocs = () => {
  useEffect(() => {
    // Scroll to the technical docs section after component mounts
    const timer = setTimeout(() => {
      const element = document.getElementById('technical-docs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <Index />;
};

export default TechnicalDocs;