type AppLinkProps = {
  href: string;
  label: string;
  target?: "_blank" | "_self";
};

export const AppLink = ({
  href,
  label,
  target = "_blank",
}: AppLinkProps) => {
  return (
    <a
      className="App-link"
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
};
