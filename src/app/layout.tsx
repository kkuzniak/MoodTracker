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
      <body className="w-full px-4 pt-8 min-h-dvh bg-gradient-to-b from-[#F5F5FF] to-[#E0E0FF] md:pt-10 md:px-8 lg:px-33.75">
        {children}
      </body>
    </html>
  );
}
