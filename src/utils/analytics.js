export const trackEvent = (eventName, eventData) => {
  // Google Analytics tracking (if GA is integrated)
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  
  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Event: ${eventName}`, eventData);
  }
};

export const pageViewTracker = (pageName) => {
  trackEvent('page_view', {
    page_path: window.location.pathname,
    page_title: pageName,
  });
};
