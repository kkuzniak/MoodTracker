import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/shared/components/logo';
import { DropdownArrowDownIcon } from '../icons/dropdown-arrow-down-icon';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-x-2.5 cursor-pointer">
        <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
        <DropdownArrowDownIcon className="w-2.5 h-1.5" />
      </div>
    </nav>
  );
};

export { Navbar };
