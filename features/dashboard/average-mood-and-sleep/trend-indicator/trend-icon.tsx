import { ArrowRightDownIcon } from '@/shared/components/icons/arrow-right-down-icon';
import { ArrowRightIcon } from '@/shared/components/icons/arrow-right-icon';
import { ArrowRightUpIcon } from '@/shared/components/icons/arrow-right-up-icon';
import { Trend } from '../../types';

type Props = {
  trend: Trend;
};

const TrendIcon = ({ trend }: Props) => {
  if (trend === 'increase') {
    return <ArrowRightUpIcon />;
  }
  if (trend === 'decrease') {
    return <ArrowRightDownIcon />;
  }
  return <ArrowRightIcon />;
};

export { type Props, TrendIcon };
