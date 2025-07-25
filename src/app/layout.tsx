
import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'MAD Academy',
  description: 'The premier academy for modern skills development.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    apple: '/favicon/apple-touch-icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Exo+2:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/B4C88ABD.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/B4C88ABD.png?v=2" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
