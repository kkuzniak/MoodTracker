import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import AuthLayout from '@/shared/layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Mood Tracker | Onboarding',
  description: 'Onboarding to the Mood Tracker app',
};

export default function OnboardingLayout({ children }: PropsWithChildren) {
  return (
    <AuthLayout
      title="Personalize your experience"
      description="Add your name and a profile picture to make Mood yours."
    >
      {children}
    </AuthLayout>
  );
}
