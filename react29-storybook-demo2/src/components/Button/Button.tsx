type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button disabled={disabled}>
      {label}
    </button>
  );
};
