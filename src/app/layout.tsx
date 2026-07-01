import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const redditSans = localFont({
  variable: '--font-sans',
  src: [
    {
      path: '../../public/fonts/reddit-sans/RedditSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/reddit-sans/RedditSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/reddit-sans/RedditSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/reddit-sans/RedditSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/reddit-sans/RedditSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Mood Tracker',
  description: 'A mood tracking app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redditSans.variable} antialiased`}>
      <body className="w-full min-h-dvh bg-[linear-gradient(to_bottom,#FAFAFF_73%,#E0E0FF_100%)]">
        {children}
      </body>
    </html>
  );
}
