import Link from "next/link";

export default function Styleguide() {
  return (
    <div className="legal-wrap">
      <div className="legal-nav">
        <Link href="/" style={{ color: '#00ff66', textDecoration: 'none', fontWeight: 'bold' }}>IRON FITNESS</Link>
        <Link href="/" className="back">← Back to home</Link>
      </div>
      
      <main style={{ marginTop: '40px' }}>
        <h1>Styleguide</h1>
        <p className="updated">The design system for Iron Fitness.</p>
        
        <h2>Colors</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#0f0f0f', border: '1px solid #333', borderRadius: '8px' }}></div>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#00ff66', borderRadius: '8px' }}></div>
          <div style={{ width: '100px', height: '100px', backgroundColor: '#ffffff', borderRadius: '8px' }}></div>
        </div>
        
        <h2>Typography</h2>
        <h1 style={{ marginBottom: '10px' }}>Heading 1 (2.5rem)</h1>
        <h2 style={{ marginBottom: '10px' }}>Heading 2 (1.5rem)</h2>
        <p>This is a standard paragraph text used across the fitness platform to convey information clearly and concisely.</p>
        
        <h2>Buttons</h2>
        <div style={{ marginTop: '20px' }}>
          <button className="button_primary" style={{ padding: '15px 30px' }}>Primary Button</button>
        </div>
      </main>
      
      <div className="legal-foot">© 2026 Iron Fitness. All rights reserved.</div>
    </div>
  );
}
