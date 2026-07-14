export default function Cookies() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="/"><img alt="Iron Fitness logo" height="30" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="/">← Back to home</a>
</div>
<main class="legal-wrap">
<h1>Cookie Policy</h1>
<p class="updated">Last updated: June 2026</p>
<p>This Cookie Policy explains how Iron Fitness uses cookies and similar technologies when you visit our website.</p>
<h2>What are cookies</h2>
<p>Cookies are small text files placed on your device that help a website function and remember your preferences. They cannot harm your device or access other files.</p>
<h2>How we use cookies</h2>
<ul>
<li><strong>Essential cookies</strong> keep the site working, for example remembering your session as you move between pages.</li>
<li><strong>Analytics cookies</strong> help us understand, anonymously, how visitors use the site so we can improve it.</li>
<li><strong>Preference cookies</strong> remember choices you make, such as your region or language.</li>
</ul>
<h2>Managing cookies</h2>
<p>You can control or delete cookies through your browser settings at any time. Blocking some cookies may affect how parts of the site work.</p>
<h2>Contact</h2>
<p>Questions about our use of cookies? Email <a href="mailto:hello@lumoradental.com">hello@lumoradental.com</a>.</p>
</main>
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="/terms" style={{"color": "#758696"}}>Terms &amp; Conditions</a></div>

` }} />
  );
}
