import { cn } from '@/utils/cn';

type Props = {
  progress: number;
  total: number;
};

const ProgressBar = ({ progress, total }: Props) => {
  return (
    <div className="w-full flex gap-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-1.5 bg-blue-200 rounded-full relative"
        >
          <div
            className={cn(
              'absolute h-full top-0 left-0 bg-blue-600 rounded-full',
              progress >= index + 1 ? 'w-full' : 'w-0',
            )}
          />
        </div>
      ))}
    </div>
  );
};

export { ProgressBar };
