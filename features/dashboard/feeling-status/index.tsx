import { ElementWrapper } from '@/shared/components/dashboard/element-wrapper';
import { QuoteIcon } from '@/shared/components/icons/quote-icon';
import { Mood } from '../types';
import { FeelingShape } from './feeling-shape';

const QUOTE_BY_TYPE: Record<Mood, string> = {
  'very-happy': 'When your heart is full, share your light with the world.',
  happy: "Happiness grows when it's shared with others.",
  neutral: 'A calm mind can find opportunity in every moment.',
  sad: 'One small positive thought can change your entire day.',
  'very-sad': 'You are stronger than you think; the storm will pass.',
};

const TITLE_BY_TYPE: Record<Mood, string> = {
  'very-happy': 'Very Happy',
  happy: 'Happy',
  neutral: 'Neutral',
  sad: 'Sad',
  'very-sad': 'Very Sad',
};

type Props = {
  type: Mood;
};

const FeelingStatus = ({ type }: Props) => {
  return (
    <ElementWrapper className="flex flex-col items-center gap-x-8 px-4 py-8 md:flex-row md:pb-0 md:pr-10 md:pl-8">
      <div className="min-w-61.5 w-full pb-8">
        <header className="text-neutral-900 mb-25">
          <h2 className="text-preset-3 opacity-70 text-center md:text-left">
            I&apos;m feeling
          </h2>
          <h1 className="text-preset-2 text-center md:text-left">
            {TITLE_BY_TYPE[type]}
          </h1>
        </header>
        <div className="flex flex-col gap-y-3">
          <QuoteIcon />
          <p className="text-preset-6-italic italic text-neutral-900">
            &quot;{QUOTE_BY_TYPE[type]}&quot;
          </p>
        </div>
      </div>
      <FeelingShape type={type} />
    </ElementWrapper>
  );
};

export { FeelingStatus };
