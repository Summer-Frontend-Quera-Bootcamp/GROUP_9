interface IIconProps {
    ColorCode: string | undefined;
}

export const ColorSectionIcon: React.FC<IIconProps> = ({ ColorCode }): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="8" fill={ColorCode} />
    </svg>
  );
};
