import type { PropsWithChildren } from 'react';
import { Logo } from '../components/logo';

type Props = PropsWithChildren<{
  title: string;
  description: string;
}>;

export default function AuthLayout({ children, title, description }: Props) {
  return (
    <div className="w-[calc(100vw-2rem)] max-w-132.5 mx-auto flex flex-col items-center py-20 mb-20 md:w-full">
      <Logo className="mb-12" />
      <div className="w-full bg-white px-4 py-10 rounded-2xl shadow-sm md:px-8">
        <h1 className="text-preset-3 text-neutral-900 mb-2">{title}</h1>
        <p className="text-preset-6-regular text-neutral-600 mb-8">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
