import Link from "next/link";

export default function Instruction() {
  return (
    <div className="legal-wrap">
      <div className="legal-nav">
        <Link href="/" style={{ color: '#00ff66', textDecoration: 'none', fontWeight: 'bold' }}>IRON FITNESS</Link>
        <Link href="/" className="back">← Back to home</Link>
      </div>
      
      <main style={{ marginTop: '40px' }}>
        <h1>Instructions</h1>
        <p className="updated">Getting Started with Iron Fitness</p>
        
        <h2>Welcome to the VGen Studio template!</h2>
        <p>This Next.js application has been fully optimized, rewritten, and vibe-coded from the ground up for a high-performance gym experience. Here are a few quick instructions:</p>
        
        <ul>
          <li><strong>Navigation:</strong> All navigation uses hard routing for full Webflow compatibility.</li>
          <li><strong>Contact:</strong> All previous booking links are connected directly to WhatsApp at 9518346262.</li>
          <li><strong>Branding:</strong> All imagery and text have been permanently shifted to fitness branding.</li>
        </ul>
        
        <h2>Editing Content</h2>
        <p>The code is cleanly modularized inside the <code>app/</code> directory using the Next.js 16+ App Router.</p>
        
        <div style={{ marginTop: '40px' }}>
          <Link href="/" className="button_primary" style={{ padding: '15px 30px', textDecoration: 'none' }}>
            Go to Dashboard
          </Link>
        </div>
      </main>
      
      <div className="legal-foot">© 2026 Iron Fitness. All rights reserved.</div>
    </div>
  );
}
