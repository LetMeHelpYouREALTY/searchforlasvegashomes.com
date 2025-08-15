

export const runtime = 'edge';

export async function GET() {
  try {
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#0F172A"/>
        <text x="600" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#60A5FA">
          🏠 SearchForLasVegasHomes.com
        </text>
        <text x="600" y="200" text-anchor="middle" font-family="system-ui, sans-serif" font-size="64" font-weight="bold" fill="white">
          Dr. Jan Duffy
        </text>
        <text x="600" y="280" text-anchor="middle" font-family="system-ui, sans-serif" font-size="36" fill="#94A3B8">
          Las Vegas's Premier Real Estate Market Researcher
        </text>
        <text x="600" y="400" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" fill="#60A5FA">
          Where Data Meets Real Estate
        </text>
      </svg>
    `;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
