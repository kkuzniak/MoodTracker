'use client';

import { BlueButton } from '@/shared/components/blue-button';
import { Input } from '@/shared/components/input';

const SignupForm = () => {
  return (
    <form className="mb-5">
      <Input id="email" label="Email address" className="mb-5" />
      <Input id="password" label="Password" className="mb-8" />
      <BlueButton className="py-3">Sign Up</BlueButton>
    </form>
  );
};

export { SignupForm };
