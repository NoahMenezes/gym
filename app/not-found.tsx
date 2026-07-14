import Link from "next/link";

export default function NotFound() {
  return (
    <div className="legal-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#00ff66', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem' }}>The gym page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="button_primary" style={{ padding: '15px 30px', textDecoration: 'none', display: 'inline-block' }}>
        Return to Home
      </Link>
    </div>
  );
}
