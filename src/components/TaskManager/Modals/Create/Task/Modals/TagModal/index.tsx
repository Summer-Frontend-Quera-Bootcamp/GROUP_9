import MiniModalSearch from "../../TagModal/MiniModalSearch";

interface ITagModal {
  show?: boolean;
}
const TagModal = ({ show = false }: ITagModal) => {
  return show ? (
    <div className="absolute bottom-[50%] right-[-61.5px] p-xs rounded-[8px] shadow-moreModal bg-White z-50">
      <MiniModalSearch
        MiniModalSearchArray={[
          {
            TagFrame: { title: "درس", color: "Blue" },
          },
          {
            TagFrame: { title: "کار", color: "Grape" },
          },
          {
            TagFrame: { title: "پروژه", color: "Cyan" },
          },
        ]}
      />
    </div>
  ) : null;
};

export default TagModal;
