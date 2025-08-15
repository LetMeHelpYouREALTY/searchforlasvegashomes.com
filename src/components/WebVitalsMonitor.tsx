'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

// Google's August 2025 Core Web Vitals thresholds
const GOOGLE_2025_THRESHOLDS = {
  LCP: 2.5,      // Largest Contentful Paint
  INP: 200,      // Interaction to Next Paint (NEW - replaced FID)
  CLS: 0.1,      // Cumulative Layout Shift (stricter)
  TTFB: 800,     // Time to First Byte
  FCP: 1.8,      // First Contentful Paint
};

export default function WebVitalsMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals using v4.0.0 API
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics); // Still useful for historical comparison
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    onINP(sendToAnalytics); // Critical for Google's 2025 update
  }, []);

  return null; // This component doesn't render anything
}

function sendToAnalytics(metric: any) {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to our Core Web Vitals API for monitoring
  sendToCoreWebVitalsAPI(metric);

  // Log to console for development
  console.log('Web Vital:', {
    name: metric.name,
    value: metric.value,
    rating: getRating(metric.name, metric.value),
    threshold: GOOGLE_2025_THRESHOLDS[metric.name as keyof typeof GOOGLE_2025_THRESHOLDS]
  });
}

function getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = GOOGLE_2025_THRESHOLDS[metricName as keyof typeof GOOGLE_2025_THRESHOLDS];
  
  if (!threshold) return 'good';
  
  // For CLS, lower is better
  if (metricName === 'CLS') {
    if (value <= threshold) return 'good';
    if (value <= threshold * 2) return 'needs-improvement';
    return 'poor';
  }
  
  // For other metrics, lower is better
  if (value <= threshold) return 'good';
  if (value <= threshold * 1.5) return 'needs-improvement';
  return 'poor';
}

async function sendToCoreWebVitalsAPI(metric: any) {
  try {
    // Collect all available metrics
    const vitals = {
      [metric.name]: metric.value,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Send to our API endpoint
    await fetch('/api/core-web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vitals),
    });
  } catch (error) {
    console.error('Failed to send Core Web Vitals to API:', error);
  }
}

// Real-time monitoring hook for components
export function useWebVitals() {
  useEffect(() => {
    let vitalsData: any = {};
    
    const collectVitals = (metric: any) => {
      vitalsData[metric.name] = metric.value;
      
      // Send batch update every 5 seconds
      if (Object.keys(vitalsData).length >= 3) {
        sendBatchVitals(vitalsData);
        vitalsData = {};
      }
    };

    // Collect vitals using v4.0.0 API
    onCLS(collectVitals);
    onFCP(collectVitals);
    onLCP(collectVitals);
    onTTFB(collectVitals);
    onINP(collectVitals);

    // Cleanup
    return () => {
      // Send any remaining vitals
      if (Object.keys(vitalsData).length > 0) {
        sendBatchVitals(vitalsData);
      }
    };
  }, []);
}

async function sendBatchVitals(vitals: any) {
  try {
    await fetch('/api/core-web-vitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...vitals,
        batch: true,
        timestamp: Date.now(),
      }),
    });
  } catch (error) {
    console.error('Failed to send batch Core Web Vitals:', error);
  }
}

// Performance monitoring utilities
export function getPerformanceScore(vitals: any): number {
  let score = 0;
  let total = 0;

  Object.entries(vitals).forEach(([name, value]) => {
    if (typeof value === 'number' && name in GOOGLE_2025_THRESHOLDS) {
      const rating = getRating(name, value);
      
      switch (rating) {
        case 'good':
          score += 100;
          break;
        case 'needs-improvement':
          score += 50;
          break;
        case 'poor':
          score += 0;
          break;
      }
      total++;
    }
  });

  return total > 0 ? Math.round(score / total) : 0;
}

export function getPerformanceRecommendations(vitals: any): string[] {
  const recommendations: string[] = [];

  Object.entries(vitals).forEach(([name, value]) => {
    if (typeof value === 'number' && name in GOOGLE_2025_THRESHOLDS) {
      const rating = getRating(name, value);

      if (rating !== 'good') {
        switch (name) {
          case 'LCP':
            recommendations.push('Optimize above-the-fold images and critical resources');
            break;
          case 'INP':
            recommendations.push('Reduce JavaScript execution time and optimize event handlers');
            break;
          case 'CLS':
            recommendations.push('Set explicit dimensions for images and avoid layout shifts');
            break;
          case 'TTFB':
            recommendations.push('Optimize server response time and implement caching');
            break;
          case 'FCP':
            recommendations.push('Optimize critical rendering path and reduce blocking resources');
            break;
        }
      }
    }
  });

  return recommendations;
}
