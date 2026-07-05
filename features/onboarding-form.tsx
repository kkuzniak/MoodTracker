import { ImageUpload } from '@/features/onboarding/image-upload';
import { BlueButton } from '@/shared/components/blue-button';
import { Input } from '@/shared/components/input';

const OnboardingForm = () => {
  return (
    <form>
      <Input id="full-name" label="Name" className="mb-6" />
      <ImageUpload className="mb-8" />
      <BlueButton className="py-3">Start Tracking</BlueButton>
    </form>
  );
};

export { OnboardingForm };
