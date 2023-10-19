// <======== Assest-Import ========> //
import { SearchIcon } from "../../../assets/Icons/CommonIcon/SearchIcon";

// <======== Component-Import ========> //

// <======== Hooks ========> //


interface ISearchBoxProps {
  placeholder: string;
  backgroundColor?: "[#F6F7F9]" | "white";
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  placeholder,
  backgroundColor = "white",
}): JSX.Element => {
  return (
    <>
      {SearchIcon}
      <input
        className={`w-full bg-${backgroundColor} outline-none font-IranYekan400 placeholder:font-IranYekan400 placeholder:text-GrayLight2 text-BodyXS placeholder:text-BodyXS`}
        placeholder={`${placeholder}`}
        type="text"
      />
    </>
  );
};

export default SearchBox;
