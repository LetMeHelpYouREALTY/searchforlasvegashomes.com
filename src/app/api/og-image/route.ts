import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      `
      <div style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #0F172A;
        color: white;
        padding: 40px;
        font-family: system-ui, sans-serif;
      ">
        <div style="
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          color: #60A5FA;
        ">
          🏠 SearchForLasVegasHomes.com
        </div>

        <div style="
          font-size: 64px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          line-height: 1.1;
          max-width: 1000px;
        ">
          Dr. Jan Duffy
        </div>

        <div style="
          font-size: 36px;
          text-align: center;
          margin-bottom: 40px;
          color: #94A3B8;
          max-width: 1000px;
        ">
          Las Vegas's Premier Real Estate Market Researcher
        </div>

        <div style="
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        ">
          <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 10px;">📊</div>
            <div style="font-size: 20px; color: #94A3B8;">Data-Driven</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 10px;">🎯</div>
            <div style="font-size: 20px; color: #94A3B8;">Research-Based</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 48px; margin-bottom: 10px;">🏆</div>
            <div style="font-size: 20px; color: #94A3B8;">Expert Analysis</div>
          </div>
        </div>

        <div style="
          font-size: 24px;
          color: #60A5FA;
          text-align: center;
          margin-top: auto;
        ">
          Where Data Meets Real Estate
        </div>
      </div>
      `,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
