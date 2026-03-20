import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HIGHLIGHT_ATTR = 'data-search-highlight';

const clearHighlights = () => {
  const highlights = document.querySelectorAll(`mark[${HIGHLIGHT_ATTR}="true"]`);

  highlights.forEach((highlight) => {
    const parent = highlight.parentNode;
    if (!parent) {
      return;
    }

    parent.replaceChild(document.createTextNode(highlight.textContent || ''), highlight);
    parent.normalize();
  });
};

const shouldSkipNode = (node: Node) => {
  const parent = node.parentElement;
  if (!parent) {
    return true;
  }

  const tag = parent.tagName;
  if (
    tag === 'MARK' ||
    tag === 'SCRIPT' ||
    tag === 'STYLE' ||
    tag === 'NOSCRIPT' ||
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'BUTTON' ||
    tag === 'SVG'
  ) {
    return true;
  }

  return Boolean(parent.closest('[data-search-skip="true"]'));
};

const highlightInRoot = (root: Element, query: string) => {
  const lowerQuery = query.toLowerCase();
  if (!lowerQuery) {
    return 0;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  let current = walker.nextNode();
  while (current) {
    if (!shouldSkipNode(current) && current.textContent && current.textContent.trim()) {
      textNodes.push(current as Text);
    }
    current = walker.nextNode();
  }

  let totalMatches = 0;

  textNodes.forEach((textNode) => {
    const originalText = textNode.textContent || '';
    const lowerText = originalText.toLowerCase();

    if (!lowerText.includes(lowerQuery)) {
      return;
    }

    const fragment = document.createDocumentFragment();
    let start = 0;
    let matchIndex = lowerText.indexOf(lowerQuery);

    while (matchIndex !== -1) {
      if (matchIndex > start) {
        fragment.appendChild(document.createTextNode(originalText.slice(start, matchIndex)));
      }

      const mark = document.createElement('mark');
      mark.setAttribute(HIGHLIGHT_ATTR, 'true');
      mark.className = 'search-highlight';
      mark.textContent = originalText.slice(matchIndex, matchIndex + query.length);
      fragment.appendChild(mark);

      totalMatches += 1;
      start = matchIndex + query.length;
      matchIndex = lowerText.indexOf(lowerQuery, start);
    }

    if (start < originalText.length) {
      fragment.appendChild(document.createTextNode(originalText.slice(start)));
    }

    textNode.parentNode?.replaceChild(fragment, textNode);
  });

  return totalMatches;
};

const SearchHighlighter = () => {
  const location = useLocation();

  useEffect(() => {
    clearHighlights();

    const query = new URLSearchParams(location.search).get('q')?.trim() || '';
    if (!query) {
      return;
    }

    const timer = window.setTimeout(() => {
      const roots = Array.from(document.querySelectorAll('main, section'));
      if (roots.length === 0) {
        return;
      }

      roots.forEach((root) => {
        highlightInRoot(root, query);
      });

      const firstHighlight = document.querySelector(`mark[${HIGHLIGHT_ATTR}="true"]`) as HTMLElement | null;
      firstHighlight?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);

    return () => {
      window.clearTimeout(timer);
      clearHighlights();
    };
  }, [location.pathname, location.search]);

  return null;
};

export default SearchHighlighter;
