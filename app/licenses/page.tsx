export default function Licenses() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="/"><img alt="Iron Fitness logo" height="30" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="/">← Back to home</a>
</div>
<main class="legal-wrap">
<h1>Licenses</h1>
<p class="updated">Last updated: June 2026</p>
<p>This page sets out the licensing terms for the content and assets used across the Iron Fitness website.</p>
<h2>Site content</h2>
<p>All copy, branding, logos, and design on this website are the property of Iron Fitness and may not be reproduced, distributed, or used without prior written permission.</p>
<h2>Imagery</h2>
<p>Photography and illustrations on this site are either owned by Iron Fitness, generated for our exclusive use, or licensed from third parties for use within this website only.</p>
<h2>Third-party software</h2>
<ul>
<li>Animations are powered by GSAP, used under its standard license.</li>
<li>Typography uses the Sora typeface under the SIL Open Font License.</li>
</ul>
<h2>Permitted use</h2>
<p>You may view and share links to this website. Any other use, including copying layouts, code, or assets, requires written consent.</p>
<h2>Contact</h2>
<p>For licensing enquiries, contact <a href="mailto:contact@vgenstudio.com">contact@vgenstudio.com</a>.</p>
</main>
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="/terms" style={{"color": "#758696"}}>Terms &amp; Conditions</a></div>

` }} />
  );
}
