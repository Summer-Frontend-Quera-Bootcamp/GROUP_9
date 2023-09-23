// <======== Code-Files ========> //
import "../../../index.css";

interface IButtonprops extends React.PropsWithChildren {
  ClassName: string;
}

const Button: React.FC<IButtonprops> = ({
  ClassName,
  children,
}): JSX.Element => {
  return <button className={`${ClassName}`}>{children}</button>;
};

export default Button;
