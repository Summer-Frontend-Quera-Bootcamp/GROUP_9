//import { useState } from "react";
import MiniModal from "../MiniModal";
import PriorityOption from "./PriorityOption";
import PriorityDeleteButton from "./PriorityDeleteButton";
interface IpriorityModal {
  show?: boolean;
}
const PriorityModal = ({ show = false }: IpriorityModal) => {
  return show ? (
    <MiniModal>
      <PriorityOption url="src\assets\Icon\Flag(Red).svg" text="فوری" />
      <PriorityOption url="src\assets\Icon\Flag(Yellow).svg" text="بالا" />
      <PriorityOption url="src\assets\Icon\Flag(Cyan).svg" text="متوسط" />
      <PriorityOption url="src\assets\Icon\Flag(Gray).svg" text="پایین" />
      <PriorityDeleteButton />
    </MiniModal>
  ) : null;
};

export default PriorityModal;
