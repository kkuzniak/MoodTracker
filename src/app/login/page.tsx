import Link from 'next/link';
import { LoginForm } from '@/features/login/login-form';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <p className="text-preset-6-regular text-neutral-600 text-center">
        Haven&apos;t got an account?{' '}
        <Link className="text-blue-600" href="/signup">
          Sign up.
        </Link>
      </p>
    </>
  );
}
