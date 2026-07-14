export default function Terms() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
<div class="legal-nav">
<a href="/"><img alt="Iron Fitness logo" height="30" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/></a>
<a class="back" href="/">← Back to home</a>
</div>
<main class="legal-wrap">
<h1>Terms &amp; Conditions</h1>
<p class="updated">Last updated: June 2026</p>
<p>Welcome to Iron Fitness. By using this website and booking appointments through it, you agree to the following terms. Please read them carefully.</p>
<h2>Use of this website</h2>
<p>The content on this site is provided for general information about our fitness services. It is not a substitute for professional medical or fitness advice, diagnosis, or treatment. Always consult a qualified clinician about your specific situation.</p>
<h2>Appointments</h2>
<ul>
<li>Bookings made through our scheduling page are requests confirmed by our team.</li>
<li>Please give us at least 24 hours' notice to reschedule or cancel a visit.</li>
<li>Repeated no-shows may affect future booking availability.</li>
</ul>
<h2>Intellectual property</h2>
<p>All text, images, logos, and design elements on this site are the property of Iron Fitness and may not be reproduced without permission.</p>
<h2>Limitation of liability</h2>
<p>Iron Fitness is not liable for any indirect or incidental damages arising from the use of this website. Treatment outcomes vary between individuals and are discussed with you directly during your visit.</p>
<h2>Contact</h2>
<p>For any questions about these terms, contact <a href="mailto:hello@lumoradental.com">hello@lumoradental.com</a>.</p>
</main>
<div class="legal-foot">© 2026 Iron Fitness. All rights reserved. · <a href="/privacy" style={{"color": "#758696"}}>Privacy Policy</a></div>

` }} />
  );
}
