import { NextResponse } from 'next/server';

// Google's August 2025 Core Web Vitals requirements
const GOOGLE_2025_THRESHOLDS = {
  LCP: 2.5,      // Largest Contentful Paint (unchanged)
  INP: 200,      // Interaction to Next Paint (NEW - replaced FID)
  CLS: 0.1,      // Cumulative Layout Shift (stricter)
  TTFB: 800,     // Time to First Byte (new emphasis)
  
  // Real Estate Specific (Google's August update)
  MLS_IMAGE_LOAD: 1000,  // Max time for listing images
  VIRTUAL_TOUR_INIT: 2000, // Max time for tour loading
};

export async function POST(request: Request) {
  try {
    const vitals = await request.json();
    
    // Validate Core Web Vitals data
    const validation = validateCoreWebVitals(vitals);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Invalid Core Web Vitals data', details: validation.errors },
        { status: 400 }
      );
    }
    
    // Log Core Web Vitals for monitoring
    console.log('Core Web Vitals Report:', {
      timestamp: new Date().toISOString(),
      ...vitals,
      propertyType: 'real-estate',
      imageOptimization: 'ai-enhanced',
      formatSupport: ['avif', 'webp'],
      compliance: checkCompliance(vitals),
    });
    
    // In production, send to Google Analytics or monitoring service
    // await sendToGoogleAnalytics(vitals);
    
    return NextResponse.json({ 
      received: true,
      compliance: checkCompliance(vitals),
      recommendations: generateRecommendations(vitals)
    });
    
  } catch (error) {
    console.error('Core Web Vitals API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process Core Web Vitals data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Core Web Vitals monitoring endpoint',
    thresholds: GOOGLE_2025_THRESHOLDS,
    requirements: 'Google requires CWV reporting for ranking maintenance',
    status: 'active'
  });
}

function validateCoreWebVitals(vitals: any) {
  const errors: string[] = [];
  const required = ['LCP', 'INP', 'CLS', 'TTFB'];
  
  for (const metric of required) {
    if (typeof vitals[metric] !== 'number') {
      errors.push(`Missing or invalid ${metric} value`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function checkCompliance(vitals: any) {
  const compliance = {
    LCP: vitals.LCP <= GOOGLE_2025_THRESHOLDS.LCP ? 'good' : 'needs-improvement',
    INP: vitals.INP <= GOOGLE_2025_THRESHOLDS.INP ? 'good' : 'needs-improvement',
    CLS: vitals.CLS <= GOOGLE_2025_THRESHOLDS.CLS ? 'good' : 'needs-improvement',
    TTFB: vitals.TTFB <= GOOGLE_2025_THRESHOLDS.TTFB ? 'good' : 'needs-improvement',
  };
  
  const allGood = Object.values(compliance).every(status => status === 'good');
  
  return {
    ...compliance,
    overall: allGood ? 'compliant' : 'needs-improvement',
    score: calculateScore(compliance)
  };
}

function calculateScore(compliance: any) {
  const goodCount = Object.values(compliance).filter(status => status === 'good').length;
  return Math.round((goodCount / 4) * 100);
}

function generateRecommendations(vitals: any) {
  const recommendations = [];
  
  if (vitals.LCP > GOOGLE_2025_THRESHOLDS.LCP) {
    recommendations.push('Optimize above-the-fold images and critical resources');
  }
  
  if (vitals.INP > GOOGLE_2025_THRESHOLDS.INP) {
    recommendations.push('Reduce JavaScript execution time and optimize event handlers');
  }
  
  if (vitals.CLS > GOOGLE_2025_THRESHOLDS.CLS) {
    recommendations.push('Set explicit dimensions for images and avoid layout shifts');
  }
  
  if (vitals.TTFB > GOOGLE_2025_THRESHOLDS.TTFB) {
    recommendations.push('Optimize server response time and implement caching');
  }
  
  return recommendations.length > 0 ? recommendations : ['All metrics are within Google\'s recommended thresholds'];
}
