export default function Cookies() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="/"><img alt="Lumora Dental logo" height="30" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
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
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="/terms" style="color:#758696;">Terms &amp; Conditions</a></div>
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
