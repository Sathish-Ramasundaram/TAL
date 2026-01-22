type MessageProps = {
  text: string;
};

export const Message = ({ text }: MessageProps) => {
  return <p>{text}</p>;
};
