import { BlueButton } from '@/shared/components/blue-button';
import { Input } from '@/shared/components/input';

const LoginForm = () => {
  return (
    <form className="mb-5">
      <Input id="email" label="Email address" className="mb-5" />
      <Input id="password" label="Password" className="mb-8" />
      <BlueButton className="py-3">Log In</BlueButton>
    </form>
  );
};

export { LoginForm };
