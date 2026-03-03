import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arun Prasad — Software Developer',
  description:
    'Personal portfolio of Molleti Venkata Arun Prasad — Software Developer specializing in Flutter, React.js, Next.js, LoopBack 4, and MongoDB. 5+ years building mobile, web, and backend applications.',
  keywords: [
    'Flutter Developer',
    'React Developer',
    'Next.js',
    'Full Stack Developer',
    'Mobile Developer',
    'Visakhapatnam',
    'Software Developer',
    'TypeScript',
    'MongoDB',
  ],
  authors: [{ name: 'Molleti Venkata Arun Prasad', url: 'https://www.linkedin.com/in/arun-prasad-b6ab071aa/' }],
  creator: 'Molleti Venkata Arun Prasad',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Arun Prasad — Software Developer',
    description:
      'Software Developer with 5+ years of experience in Flutter, React.js, Next.js, and LoopBack 4.',
    siteName: 'Arun Prasad Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Prasad — Software Developer',
    description: 'Software Developer specializing in mobile, web, and backend development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash — sets dark class immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('portfolio-theme');
                if (!t) {
                  t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
