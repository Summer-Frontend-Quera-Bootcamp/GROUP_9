import { ColorList } from "../../../../../constants/ColorList";


interface IPlusButtonColorProps {
  itemColor: string;
}

const WorkspacePlusButton: React.FC<IPlusButtonColorProps> = ({ itemColor }): JSX.Element => {
  const color = ColorList.get(itemColor)
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 20.0002H6C4.895 20.0002 4 19.1052 4 18.0002V6.00018C4 4.89518 4.895 4.00018 6 4.00018H18C19.105 4.00018 20 4.89518 20 6.00018V18.0002C20 19.1052 19.105 20.0002 18 20.0002Z"
          stroke={`${color?.primaryColorCode}`}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 8.00018V16.0002"
          stroke={`${color?.primaryColorCode}`}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 12.0002H8"
          stroke={`${color?.primaryColorCode}`}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  )
}

export default WorkspacePlusButton;