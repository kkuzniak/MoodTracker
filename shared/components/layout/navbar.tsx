import Image from 'next/image';
import { Logo } from '@/shared/components/logo';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-x-2.5">
        <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
        <div className="bg-red-500 w-2.5 h-1.5"></div>
      </div>
    </nav>
  );
};

export { Navbar };
