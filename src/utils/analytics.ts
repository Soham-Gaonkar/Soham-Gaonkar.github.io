type AnalyticsEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const isAnalyticsReady = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const trackEvent = (eventName: string, params?: AnalyticsEventParams) => {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag?.('event', eventName, params || {});
};

export const trackPageView = (path: string) => {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: document.title,
  });
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
  const normalized = label.toLowerCase();

  switch (normalized) {
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
      trackEvent('contact_click', {
        label: normalized,
        source,
      });
      break;
  }
};