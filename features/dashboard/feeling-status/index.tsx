import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { QuoteIcon } from '@/shared/components/icons/quote-icon';
import { cn } from '@/utils/cn';
import { TITLE_BY_MOOD } from '../constants';
import { Mood } from '../types';
import { FeelingShape } from './feeling-shape';

const QUOTE_BY_TYPE: Record<Mood, string> = {
  'very-happy': 'When your heart is full, share your light with the world.',
  happy: "Happiness grows when it's shared with others.",
  neutral: 'A calm mind can find opportunity in every moment.',
  sad: 'One small positive thought can change your entire day.',
  'very-sad': 'You are stronger than you think; the storm will pass.',
};

type Props = {
  type: Mood;
};

const FeelingStatus = ({ type }: Props) => {
  return (
    <ElementWrapper
      className={cn(
        'grid grid-cols-1 items-start justify-items-center grid-rows-auto gap-8 px-4 py-8',
        'md:pb-0 md:pr-10 md:pl-8 md:grid-rows-[1fr_auto] md:grid-cols-[1fr_20rem] md:justify-items-start',
        'lg:grid-cols-[15.375rem_1fr]',
      )}
    >
      <header className="text-neutral-900 md:col-start-1 md:row-start-1">
        <h2 className="text-preset-3 opacity-70 text-center md:text-left">
          I&apos;m feeling
        </h2>
        <h1 className="text-preset-2 text-center md:text-left">
          {TITLE_BY_MOOD[type]}
        </h1>
      </header>
      <FeelingShape type={type} className="md:col-start-2 md:row-span-full" />
      <div className="flex flex-col gap-4 items-center md:gap-3 md:items-start md:mb-8 md:col-start-1 md:row-start-2">
        <QuoteIcon />
        <p className="text-preset-6-italic italic text-neutral-900 text-center md:text-left">
          &quot;{QUOTE_BY_TYPE[type]}&quot;
        </p>
      </div>
    </ElementWrapper>
  );
};

export { FeelingStatus };
