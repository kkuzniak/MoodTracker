import { ArrowRightDownIcon } from '@/shared/components/icons/arrow-right-down-icon';
import { ArrowRightIcon } from '@/shared/components/icons/arrow-right-icon';
import { ArrowRightUpIcon } from '@/shared/components/icons/arrow-right-up-icon';
import { Nullable, Trend } from '../../types';

type Props = {
  trend: Nullable<Trend>;
};

const TrendIcon = ({ trend }: Props) => {
  if (!trend) {
    return null;
  }

  if (trend === 'increase') {
    return <ArrowRightUpIcon />;
  }
  if (trend === 'decrease') {
    return <ArrowRightDownIcon />;
  }
  return <ArrowRightIcon />;
};

export { type Props, TrendIcon };
