interface ILinkButtonprops extends React.PropsWithChildren {
  ClassName: string;
  href: string;
}

const Link: React.FC<ILinkButtonprops> = ({
  ClassName,
  href,
  children,
}): JSX.Element => {
  return (
    <a href={`${href}`} className={`${ClassName}`}>
      {children}
    </a>
  );
};

export default Link;
