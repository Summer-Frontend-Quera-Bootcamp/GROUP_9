import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Label } from "../../../../../api/SpacesAndProjectsData";
import EditModal from "../EditModal";
interface ITagFrame {
  TagFrame: Label;
}
interface IMiniModalSearch extends React.PropsWithChildren {
  MiniModalSearchArray: ITagFrame[];
}
const MiniModalSearch = ({
  MiniModalSearchArray,
}: IMiniModalSearch): JSX.Element => {
  const [state, setState] = useState("");
  const [inputText, setInputText] = useState("");
  const [editModalShow, setEditModalShow] = useState<boolean>(false);
  const [newTag, setNewTag] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    setNewTag(false);
    setInputText(e.target.value);
  };
  const handleKey = (e: KeyboardEvent) => {
    e.key === "Enter" ? setNewTag(true) : null;
  };
  let tags = MiniModalSearchArray.filter((str) => {
    return str.TagFrame.content.includes(state);
  });
  return (
    <div>
      <div>
        {newTag ? (
          <div className="w-full">
            <div className="w-fit h-m mb-xs px-xs bg-Orange-Secondary text-Orange-Primary font-IranYekan400  text-[12px] rounded-full flex justify-center items-center">
              {inputText}
            </div>
          </div>
        ) : null}
        <div className="mx-auto bg-[#E9E9E9] w-fit h-l mb-s gap-xs px-xs  flex justify-center items-center rounded-[4px]">
          <img src="src\assets\Icon\SearchIcon(Gray).svg" alt="icon" />
          <input
            className="bg-[#E9E9E9] w-[109px] font-IranYekan400 text-[12px] text-[#534D60] placeholder-[#534D60]"
            type="text"
            placeholder="جستجو یا ساختن تگ"
            onChange={handleChange}
            onKeyDown={handleKey}
          ></input>
        </div>
      </div>
      <ul>
        {!(tags.length === 0) ? (
          tags.map((item) => (
            <li
              key={item.TagFrame.content}
              className="w-[153px] mt-[12px] h-fit flex justify-between"
            >
              <div
                className={`w-fit h-m px-xs bg-${item.TagFrame.color}-Secondary text-${item.TagFrame.color}-Primary font-IranYekan800  text-[12px] rounded-full flex justify-center items-center`}
              >
                {item.TagFrame.content}
              </div>
              <div
                onClick={() => setEditModalShow(!editModalShow)}
                className="cursor-pointer"
              >
                <img src="src\assets\Icon\Dots(Gray).svg" alt="options" />
              </div>
            </li>
          ))
        ) : (
          <li className="text-[12px] font-IranYekan400 text=[#3D3D3D]">
            برای ساختن تگ جدید اینتر بزنید
          </li>
        )}
      </ul>
      {editModalShow ? <EditModal /> : null}
    </div>
  );
};

export default MiniModalSearch;
