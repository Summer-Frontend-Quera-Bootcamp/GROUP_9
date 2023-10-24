// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Modal from "../../CommonModal";
import Input from "../../../../common/Input";

// <======== Interfaces ========> //
import { FormData } from "../../../../../interfaces/FormData";

// <======== Constants ========> //
import { ColorList } from "../../../../../constants/ColorList";
import { schema } from "../../../../../constants/ZodValidation";

// <======== Hooks ========> //
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const NewProjectModal: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");

  const handleProjectNameChange = () => {
    null;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <Modal title="ساختن پروژه جدید" gap="gap-[20px]" visibility="invisible">
      <main className="w-full">
        <form
          className="w-full flex flex-col gap-xl"
          onSubmit={handleSubmit(submitData)}
        >
          <Input
            type="text"
            name="projectName"
            label="نام پروژه"
            hook={register}
            error={errors}
            handler={handleProjectNameChange}
          />
          <button
            className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
          >
            ساختن پروژه
          </button>
        </form>
      </main>
    </Modal>
  );
};
export default NewProjectModal;
