export default function Privacy() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="index.html"><img alt="Lumora Dental logo" height="30" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="index.html">← Back to home</a>
</div>
<main class="legal-wrap">
<h1>Privacy Policy</h1>
<p class="updated">Last updated: June 2026</p>
<p>At Iron Fitness, your privacy and trust matter to us as much as your strength. This policy explains what information we collect when you visit our website or book an appointment, and how we keep it safe.</p>
<h2>Information we collect</h2>
<p>When you book a visit or contact us, we may collect your name, phone number, email address, and any details you choose to share about your fitness needs. We also collect basic, anonymous analytics about how our site is used so we can improve it.</p>
<h2>How we use it</h2>
<ul>
<li>To schedule, confirm, and follow up on your appointments.</li>
<li>To respond to your questions and provide the care you request.</li>
<li>To send appointment reminders and, only with your consent, occasional practice updates.</li>
</ul>
<h2>How we protect it</h2>
<p>We treat your health and contact information as confidential and store it securely. We never sell your personal data. We share it only with the clinicians and systems directly involved in your care, or where required by law.</p>
<h2>Your choices</h2>
<p>You may request access to, correction of, or deletion of your information at any time by emailing <a href="mailto:hello@lumoradental.com">hello@lumoradental.com</a>. You can opt out of non-essential communications whenever you like.</p>
<h2>Contact</h2>
<p>Questions about this policy? Reach us at <a href="mailto:hello@lumoradental.com">hello@lumoradental.com</a> or book a visit through our <a href="https://calendly.com/shreyasrajsony11">appointment page</a>.</p>
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
