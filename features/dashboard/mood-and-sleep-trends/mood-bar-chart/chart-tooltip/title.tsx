type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return <p className="text-preset-8 text-neutral-600 mb-2">{text}</p>;
};

export { Title };
