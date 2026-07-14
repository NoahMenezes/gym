import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gym & Fitness Studio",
  description: "Modern, professional fitness training and state-of-the-art gym facilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/assets/css/lumora.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        
        {/* Next.js optimized scripts */}
        <Script 
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" 
          strategy="beforeInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              WebFont.load({
                  google: {
                      families: ["Sora:300,400,500,600,700"]
                  }
              });
              !function(o, c) {
                  var n = c.documentElement
                    , t = " w-mod-";
                  n.className += t + "js",
                  ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
              }(window, document);
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Standard script tags with 'defer' guarantee exact execution order, which Webflow chunks require, without blocking the main render thread */}
        <script defer src="/assets/js/jquery-3.5.1.min.js"></script>
        
        <script defer src="/assets/js/webflow.schunk.36b8fb49256177c8.js"></script>
        <script defer src="/assets/js/webflow.schunk.5e71080783712679.js"></script>
        <script defer src="/assets/js/webflow.c9187143.3b5f57f78ed8e3cc.js"></script>
        
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/SplitText.min.js"></script>
        <script defer src="/assets/js/ScrollTrigger.min.js"></script>
      </body>
    </html>
  );
}
