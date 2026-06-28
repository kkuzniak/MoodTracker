import { PropsWithChildren } from 'react';
import { Logo } from '../components/logo';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center mt-20">
      <Logo className="mb-12" />
      <div className="bg-white px-8 py-10 rounded-2xl shadow-sm">
        {children}
      </div>
    </div>
  );
}
