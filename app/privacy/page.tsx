export default function Privacy() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="/"><img alt="Iron Fitness logo" height="30" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="/">← Back to home</a>
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
<p>We treat your health and contact information as confidential and store it securely. We never sell your personal data. We share it only with the coaches and systems directly involved in your care, or where required by law.</p>
<h2>Your choices</h2>
<p>You may request access to, correction of, or deletion of your information at any time by emailing <a href="mailto:contact@vgenstudio.com">contact@vgenstudio.com</a>. You can opt out of non-essential communications whenever you like.</p>
<h2>Contact</h2>
<p>Questions about this policy? Reach us at <a href="mailto:contact@vgenstudio.com">contact@vgenstudio.com</a> or book a visit through our <a href="https://wa.me/9518346262">appointment page</a>.</p>
</main>
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="/terms" style={{"color": "#758696"}}>Terms &amp; Conditions</a></div>

` }} />
  );
}
