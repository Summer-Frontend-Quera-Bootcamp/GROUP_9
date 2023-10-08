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
      <PriorityOption color="red" text="فوری" />
      <PriorityOption color="yellow" text="بالا" />
      <PriorityOption color="cyan" text="متوسط" />
      <PriorityOption color="gray" text="پایین" />
      <PriorityDeleteButton />
    </MiniModal>
  ) : null;
};

export default PriorityModal;
