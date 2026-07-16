import { cn } from '@/utils/cn';
import type { Trend } from '../types';
import {
  TrendIcon,
  type Props as TrendIconProps,
} from './trend-indicator/trend-icon';

const TEXT_BY_TREND: Record<Trend, string> = {
  increase: 'Increase from the previous 5 check-ins',
  decrease: 'Decrease from the previous 5 check-ins',
  same: 'Same as the previous 5 check-ins',
};

const MAX_WIDTH_BY_TREND: Record<Trend, string> = {
  increase: 'max-w-50',
  decrease: 'max-w-50',
  same: 'max-w-auto',
};

type Props = TrendIconProps & {
  emptyText: string;
};

const TrendIndicator = ({ trend, emptyText }: Props) => {
  const text = trend ? TEXT_BY_TREND[trend] : emptyText;

  return (
    <p
      className={cn(
        'opacity-70 text-preset-7 flex flex-row gap-x-2',
        trend ? MAX_WIDTH_BY_TREND[trend] : '',
      )}
    >
      <TrendIcon trend={trend} />
      <span>{text}</span>
    </p>
  );
};

export { TrendIndicator };
