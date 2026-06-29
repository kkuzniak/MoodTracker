import type { StyledElement } from '@/shared/types';

const ArrowRightUpIcon = ({ className }: StyledElement) => {
  return (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.41531 5.86074C3.39409 5.66976 3.56385 5.5 3.77605 5.5L12.6461 5.5C12.8583 5.5 13.0068 5.64854 13.0068 5.86074V14.7308C13.0068 14.943 12.8371 15.1127 12.6461 15.0915L11.8185 15.1127C11.6063 15.1127 11.4365 14.943 11.4578 14.752L11.4365 8.15252L4.20046 15.3886C4.05192 15.5371 3.83971 15.5371 3.69117 15.3886L3.09701 14.7944C2.96969 14.6671 2.94847 14.4337 3.09701 14.2851L10.3331 7.04907H3.75483C3.56385 7.07029 3.39409 6.90053 3.39409 6.68833L3.41531 5.86074Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { ArrowRightUpIcon };
