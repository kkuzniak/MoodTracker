import Link from 'next/link';
import { Logo } from '@/shared/components/logo';
import { Menu } from './menu';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-8 md:mt-10">
      <Link href="/">
        <Logo />
      </Link>
      <Menu fullName="Lisa Maria" email="lisa@mail.com" />
    </nav>
  );
};

export { Navbar };
