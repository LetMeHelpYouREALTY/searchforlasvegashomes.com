import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const features = [
  { icon: '📊', label: 'Data-Driven' },
  { icon: '🎯', label: 'Research-Based' },
  { icon: '🏆', label: 'Expert Analysis' },
];

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F172A',
            color: 'white',
            padding: 40,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 20,
              fontSize: 24,
              fontWeight: 'bold',
              color: '#60A5FA',
            }}
          >
            🏠 SearchForLasVegasHomes.com
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
              lineHeight: 1.1,
              maxWidth: 1000,
            }}
          >
            Dr. Jan Duffy
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 36,
              textAlign: 'center',
              marginBottom: 40,
              color: '#94A3B8',
              maxWidth: 1000,
            }}
          >
            Las Vegas&apos;s Premier Real Estate Market Researcher
          </div>

          <div style={{ display: 'flex', gap: 40, marginBottom: 40 }}>
            {features.map(({ icon, label }) => (
              <div
                key={label}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ display: 'flex', fontSize: 48, marginBottom: 10 }}>{icon}</div>
                <div style={{ display: 'flex', fontSize: 20, color: '#94A3B8' }}>{label}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#60A5FA',
              textAlign: 'center',
              marginTop: 'auto',
            }}
          >
            Where Data Meets Real Estate
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
