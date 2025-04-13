import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals_theme_2.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || "Jervi Media Saas", // Fallback if env var is missing
  description: "Access a curated library of diverse content, anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
         <script
          dangerouslySetInnerHTML={{
            __html: IN_APP_BROWSER_REDIRECT_SCRIPT,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

const IN_APP_BROWSER_REDIRECT_SCRIPT = `\
(function () {
  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = /android/.test(ua);
  const isInAppBrowser = (
    ua.includes('instagram') ||
    ua.includes('fban') || ua.includes('fbav') || // Facebook
    ua.includes('twitter') || // Twitter/X
    ua.includes('tiktok') || // TikTok
    ua.includes('wv') || // Generic WebView indicator
    (ua.includes('safari') === false && ua.includes('chrome') === false && ua.includes('firefox') === false)
  );

  if (isInAppBrowser) {
    const currentUrl = window.location.href;
    let externalUrl = currentUrl;

    if (isIOS) {
      externalUrl = 'x-safari-' + currentUrl;
    } else if (isAndroid) {
      externalUrl = currentUrl;
    }

    window.location.href = externalUrl;
  }
})();
`;