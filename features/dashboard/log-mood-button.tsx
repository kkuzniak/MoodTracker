import { Modal } from '@/shared/components/modal';
import { LogMoodModal } from './log-mood-modal';

const LogMoodButton = () => {
  return (
    <Modal
      content={<LogMoodModal />}
      overlayClassName="bg-neutral-900 opacity-70"
    >
      <div className="px-8 py-4 bg-blue-600 text-neutral-0 text-preset-5 rounded-[10px] mb-16 cursor-pointer">
        Log today&apos;s mood
      </div>
    </Modal>
  );
};

export { LogMoodButton };
