import type { TooltipContentProps } from 'recharts';
import { TooltipAnchor } from '@/shared/components/shapes/tooltip-anchor';
import { cn } from '@/utils/cn';
import { SLEEP_LABEL, TITLE_BY_MOOD } from '../../../constants';
import { MoodShape } from '../../../mood-shape';
import { BAR_WIDTH } from '../index';
import type { DataPoint } from '../types';
import { Section } from './section';

const CARD_GAP = 10;
const ARROW_CENTER_Y = 30;

type Props = TooltipContentProps & {
  anchorRect: DOMRect | undefined;
};

const ChartTooltip = ({ active, payload, coordinate, anchorRect }: Props) => {
  const dataPoint = payload?.[0]?.payload as DataPoint | undefined;

  if (!active || !dataPoint?.mood || !coordinate || !anchorRect) {
    return null;
  }

  const { mood, value, reflection, tags } = dataPoint;
  const sleepLabel = SLEEP_LABEL[value];

  const pointX = anchorRect.left + coordinate.x - 20;
  const pointY = anchorRect.top + 50;

  const isLeft = coordinate.x < anchorRect.width / 2;

  return (
    <div
      className="fixed w-43.75 drop-shadow-tooltip"
      style={{
        left: isLeft ? pointX + CARD_GAP + BAR_WIDTH : pointX - CARD_GAP,
        top: pointY - ARROW_CENTER_Y,
        transform: isLeft ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <div
        aria-hidden
        className={cn('absolute bottom-6.75 -right-2.25 z-100', {
          '-right-2.25': !isLeft,
          '-left-2.25': isLeft,
        })}
      >
        <TooltipAnchor
          className={cn({
            'rotate-180': isLeft,
          })}
        />
      </div>
      <div className="relative flex flex-col gap-3 rounded-[10px] bg-neutral-0 p-3 ring ring-blue-100">
        <Section
          title="Mood"
          contentClassName="text-preset-7 flex items-center gap-1.5"
        >
          <MoodShape type={mood} className="size-4 shrink-0" />
          <span className="text-preset-7 text-neutral-900">
            {TITLE_BY_MOOD[mood]}
          </span>
        </Section>
        <Section
          title="Sleep"
          contentClassName="text-preset-7"
          isLoading={!sleepLabel}
        >
          {sleepLabel}
        </Section>
        <Section title="Reflection" isLoading={!reflection}>
          {reflection}
        </Section>
        <Section
          title="Tags"
          isLoading={tags?.length === 0}
          contentClassName="capitalize"
        >
          {tags?.join(', ')}
        </Section>
      </div>
    </div>
  );
};

export { ChartTooltip };
