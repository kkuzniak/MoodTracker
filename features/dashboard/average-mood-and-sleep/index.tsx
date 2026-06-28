import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { AverageMood } from './average-mood';
import { AverageSleep } from './average-sleep';

const AverageMoodAndSleep = () => {
  return (
    <ElementWrapper className="w-full flex-col gap-6 py-5 px-4 lg:p-6">
      <AverageMood />
      <AverageSleep />
    </ElementWrapper>
  );
};

export { AverageMoodAndSleep };
