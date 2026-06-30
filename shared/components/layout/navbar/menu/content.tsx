import { CogIcon } from '@/shared/components/icons/cog-icon';
import { LogoutIcon } from '@/shared/components/icons/logout-icon';
import { Button } from './button';

type Props = {
  fullName: string;
  email: string;
};

const Content = ({ fullName, email }: Props) => {
  return (
    <div className="mt-4 w-[calc(100vw-2rem)] flex flex-col gap-y-3 bg-neutral-0 rounded-lg shadow-drop-down px-4 py-3 md:w-50 md:mt-2">
      <div>
        <p className="text-preset-6 text-neutral-900 mb-0.5">{fullName}</p>
        <p className="text-preset-7 text-neutral-300">{email}</p>
      </div>
      <hr className="w-full text-blue-100" />
      <Button icon={<CogIcon />} title="Settings" />
      <Button icon={<LogoutIcon />} title="Logout" />
    </div>
  );
};

export { Content, type Props };
