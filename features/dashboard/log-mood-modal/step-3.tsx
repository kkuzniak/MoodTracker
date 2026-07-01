import { TextArea } from './inputs/text-area';

const Step3 = () => {
  return (
    <div>
      <h2 className="text-preset-3-mobile mb-6 md:mb-8 md:text-preset-3">
        Write about your day...
      </h2>
      <TextArea maxLength={150} />
    </div>
  );
};

export { Step3 };
