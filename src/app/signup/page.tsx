import Link from 'next/link';
import { SignupForm } from '@/features/signup/signup-form';

export default function SignupPage() {
  return (
    <>
      <SignupForm />
      <p className="text-preset-6-regular text-neutral-600 text-center">
        Already got an account?{' '}
        <Link className="text-blue-600" href="/login">
          Log in.
        </Link>
      </p>
    </>
  );
}
