import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from './seoConfig';

const SeoManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    let config = seoConfig[path];
    
    if (!config) {
      config = seoConfig['/'];
    }
    
    document.title = config.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.description);
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.title);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', config.description);
    
  }, [location.pathname]);
  
  return null;
};

export default SeoManager;
