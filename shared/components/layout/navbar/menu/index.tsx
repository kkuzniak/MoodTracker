import Image from 'next/image';
import { DropdownMenu } from '@/shared/components/dropdown-menu';
import { DropdownArrowDownIcon } from '@/shared/components/icons/dropdown-arrow-down-icon';
import { Content, type Props } from './content';

const Menu = ({ fullName, email }: Props) => {
  return (
    <DropdownMenu
      content={<Content fullName={fullName} email={email} />}
      align="end"
      sideOffset={0}
      triggerClassName="data-[state=open]:[&>svg]:rotate-180"
    >
      <div className="flex items-center gap-x-2.5">
        <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
        <DropdownArrowDownIcon className="w-2.5 h-1.5" />
      </div>
    </DropdownMenu>
  );
};

export { Menu };
