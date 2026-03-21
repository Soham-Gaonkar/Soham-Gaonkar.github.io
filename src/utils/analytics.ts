type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __analyticsInitialized?: boolean;
  }
}

const MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

export const initializeAnalytics = () => {
  if (!MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  if (window.__analyticsInitialized) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { anonymize_ip: true });
  window.__analyticsInitialized = true;
};

export const trackEvent = (eventName: string, params?: AnalyticsEventParams) => {
  if (!window.gtag) {
    return;
  }

  window.gtag('event', eventName, params || {});
};

export const trackResumeClick = (source: string) => {
  trackEvent('resume_click', { source });
};

export const trackEmailClick = (source: string) => {
  trackEvent('email_click', { source });
};

export const trackLinkedInClick = (source: string) => {
  trackEvent('linkedin_click', { source });
};

export const trackGitHubClick = (source: string) => {
  trackEvent('github_click', { source });
};

export const trackProjectOutboundClick = (projectTitle: string, destination: 'github' | 'demo') => {
  trackEvent('project_outbound_click', {
    project_title: projectTitle,
    destination,
  });
};

export const trackContactClick = (label: string, source: string) => {
  switch (label.toLowerCase()) {
    case 'email':
      trackEmailClick(source);
      break;
    case 'linkedin':
      trackLinkedInClick(source);
      break;
    case 'github':
      trackGitHubClick(source);
      break;
    default:
      break;
  }
};
