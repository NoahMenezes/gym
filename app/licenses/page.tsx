export default function Licenses() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="index.html"><img alt="Lumora Dental logo" height="30" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="index.html">← Back to home</a>
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
<p>For licensing enquiries, contact <a href="mailto:hello@lumoradental.com">hello@lumoradental.com</a>.</p>
</main>
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="terms.html" style="color:#758696;">Terms &amp; Conditions</a></div>
<script>
/* Lumora image guard: any failed/empty image -> on-brand gradient SVG so nothing ever looks broken. */
(function(){
  function ph(label){
    var t=(label||'Lumora Dental').replace(/[<>&]/g,'').slice(0,22);
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">'
     +'<defs><linearGradient id="lg" x1="0" y1="0" x2="1280" y2="720" gradientUnits="userSpaceOnUse">'
     +'<stop offset="0" stop-color="#24a3b1"/><stop offset="1" stop-color="#011f23"/></linearGradient></defs>'
     +'<rect width="1280" height="720" fill="url(#lg)"/>'
     +'<circle cx="640" cy="298" r="44" fill="#fff" opacity="0.9"/>'
     +'<text x="640" y="436" fill="#fff" font-family="Sora,Arial" font-size="40" font-weight="600" text-anchor="middle" opacity="0.92">'+t+'</text></svg>';
    return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
  }
  function bind(im){
    im.addEventListener('error',function(){ if(im.dataset.fbk)return; im.dataset.fbk='1'; im.src=ph(im.alt); });
    if(im.complete && im.naturalWidth===0 && !im.dataset.fbk){ im.dataset.fbk='1'; im.src=ph(im.alt); }
  }
  document.querySelectorAll('img').forEach(bind);
})();
</script>
` }} />
  );
}
