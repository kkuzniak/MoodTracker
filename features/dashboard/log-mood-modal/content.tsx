import { Step1 } from './step-1';
import { Step2 } from './step-2';
import { Step3 } from './step-3';
import { Step4 } from './step-4';

type Props = {
  step: number;
};

const Content = ({ step }: Props) => {
  if (step === 2) {
    return <Step2 />;
  }

  if (step === 3) {
    return <Step3 />;
  }

  if (step === 4) {
    return <Step4 />;
  }

  return <Step1 />;
};

export { Content };
