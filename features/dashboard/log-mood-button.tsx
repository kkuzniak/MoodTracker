import { BlueButton } from '@/shared/components/blue-button';
import { Modal } from '@/shared/components/modal';
import { LogMoodModal } from './log-mood-modal';

const LogMoodButton = () => {
  return (
    <Modal
      content={<LogMoodModal />}
      overlayClassName="bg-neutral-900 opacity-70"
    >
      <BlueButton className="px-8 mb-16">Log today&apos;s mood</BlueButton>
    </Modal>
  );
};

export { LogMoodButton };
