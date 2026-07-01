import { OptionCard } from '@/shared/components/option-card';
import { SleepAmount } from '../../types';

type Props = {
  sleepAmount: SleepAmount;
};

const SleepAmountOptionCard = ({ sleepAmount }: Props) => {
  return (
    <OptionCard
      contentClassName="flex justify-start"
      className="py-3.5"
      type="radio"
    >
      <h3 className="text-preset-5 text-neutral-900">{sleepAmount} hours</h3>
    </OptionCard>
  );
};

export { SleepAmountOptionCard };
