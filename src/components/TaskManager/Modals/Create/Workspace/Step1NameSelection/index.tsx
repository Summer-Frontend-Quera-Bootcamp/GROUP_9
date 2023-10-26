// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Modal from "../../../CommonModal";
import Input from "../../../../../common/Input";

// <======== Interfaces ========> //
import { FormData } from "../../../../../../interfaces/FormData";

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import { schema } from "../../../../../../constants/ZodValidation";

// <======== Hooks ========> //
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAppDispatch } from "../../../../../../services/app/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  closemodal,
  stepoen,
} from "../../../../../../services/features/workspace/workspacemodalSlice";
import { RootState } from "../../../../../../services/app/store";

const NewSpaceModalNameSelection: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");
  const dispatch = useDispatch();
  const Dispatch = useAppDispatch();
  const visible = useSelector((state: RootState) => state.workspacemodal.modalone);
  const workname = useSelector((state: RootState) => state.workspacemodal.name);
  const [name, setName] = useState("");

  const handleSpaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log("data is : ", data);
  };

  const handleCreate = () => {
    dispatch(stepoen(name));
  };

  const handleclose = () => {
    dispatch(closemodal());
  };

  return (
    <Modal
      title="ساختن ورک‌اسپیس جدید"
      gap="gap-[20px]"
      visibility={visible}
      close={() => handleclose()}
    >
      <main className="w-full">
        <form
          className="w-full flex flex-col gap-xl"
          onSubmit={handleSubmit(submitData)}
        >
          <Input
            type="text"
            name="newworkspacename"
            label="نام ورک‌اسپیس"
            hook={register}
            error={errors}
            handler={handleSpaceNameChange}
          />
          <button
            onClick={handleCreate}
            className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
          >
            ادامه
          </button>
        </form>
      </main>
    </Modal>
  );
};
export default NewSpaceModalNameSelection;
