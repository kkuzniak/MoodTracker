import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import AuthLayout from '@/shared/layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Mood Tracker | Signup',
  description: 'Create a new Mood Tracker account',
};

export default function SignupLayout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
