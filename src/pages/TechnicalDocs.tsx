import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TechnicalDocs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to home page
    navigate('/', { replace: true });
    
    // Wait for navigation and then scroll to the technical docs section
    setTimeout(() => {
      const element = document.getElementById('technical-docs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return null;
};

export default TechnicalDocs;