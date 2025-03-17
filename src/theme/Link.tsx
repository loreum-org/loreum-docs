import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface CustomLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CustomLink({ to, href, children, className }: CustomLinkProps) {
  const isTelegramWebView = typeof window !== 'undefined' && 
    window.navigator.userAgent.toLowerCase().includes('telegram');

  const handleClick = (e: React.MouseEvent) => {
    if (isTelegramWebView) {
      const targetUrl = to ? useBaseUrl(to) : href;
      if (targetUrl) {
        e.preventDefault();
        // Open in external browser if it's not an internal link
        if (href && !href.startsWith('/')) {
          window.open(targetUrl, '_blank');
        } else {
          window.location.href = targetUrl;
        }
      }
    }
  };

  if (to) {
    return (
      <Link to={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} onClick={handleClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return null;
} 