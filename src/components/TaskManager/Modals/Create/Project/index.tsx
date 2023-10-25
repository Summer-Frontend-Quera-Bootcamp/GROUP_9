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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import {
  calledOff,
  textAdded,
} from "../../../../../services/features/modals/createProjectSlice";
import store from "../../../../../services/app/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../services/app/hooks";
import { newproject } from "../../../../../services/features/workspace/projectsSlice";
const NewProjectModal: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");
  const dispatch = useDispatch();
  const Dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const visibility = useSelector((state: any) => state.projectModal.visibility);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };
  const handleCreate = () => {
    //
    Dispatch(newproject({ id: store.getState().projectModal.id, name: name }));
    dispatch(calledOff());
    dispatch(textAdded(name));
  };
  const handleClose = () => {
    dispatch(calledOff());
  };
  return (
    <Modal
      close={handleClose}
      title="ساختن پروژه جدید"
      gap="gap-[20px]"
      visibility={visibility}
    >
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
            onClick={handleCreate}
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
