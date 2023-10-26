// <======== Assest-Import ========> //
import { ColorSectionIcon } from "../../../assets/Icons/CommonComponents/ColorInput/ColorSectionIcon";
import { NoColorIcon } from "../../../assets/Icons/TaskManager/Modals/Share/NoColoreIcon";
import { SelectedColorIcon } from "../../../assets/Icons/CommonComponents/ColorInput/SelectedColorIcon";

// <======== Component-Import ========> //

// <======== Constants ========> //
import { ColorList } from "../../../constants/ColorList";

// <======== Hooks ========> //
import { useState } from "react";


interface IColorInputProps {
  defaultColor?: string;
  isNoColorButton?: boolean;
  func: (color: string) => void;
}

const ColorInput: React.FC<IColorInputProps> = ({
  defaultColor = "",
  isNoColorButton = false,
  func,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const Colors = [
    "Indigo",
    "Blue",
    "Cyan",
    "Teal",
    "Brand",
    "Green",
    "Lime",
    "Yellow",
    "Orange",
    "Red",
    "Pink",
    "Grape",
    "Violet",
  ];
  const handleClicked = (sColor: string) => {
    setSelectedColor(sColor);
    func(sColor);
  };
  return (
    <>
      {isNoColorButton && NoColorIcon}
      {Colors.map((item) => {
        const color = ColorList.get(item);
        return (
          <div
            onClick={() => {
              handleClicked(item);
            }}
            className="cursor-pointer"
          >
            {selectedColor === item ? (
              <SelectedColorIcon ColorCode={color?.primaryColorCode} />
            ) : (
              <ColorSectionIcon ColorCode={color?.primaryColorCode} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ColorInput;
