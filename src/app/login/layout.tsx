import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import AuthLayout from '@/shared/layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Mood Tracker | Login',
  description: 'Login to your Mood Tracker account',
};

export default function LoginLayout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
