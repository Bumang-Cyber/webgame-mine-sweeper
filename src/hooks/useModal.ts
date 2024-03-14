import { RootState } from "./../store/index";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/store/modalSlice";
import { ModalType } from "@/types/modal";

const useModal = () => {
  const dispatchModal = useDispatch();
  const currentModal = useSelector((state: RootState) => {
    return state.modal.value;
  });

  const modalChangeHandler = (type: ModalType) => {
    console.log(type, "type");
    dispatchModal(change(type));
  };

  return { currentModal, modalChangeHandler };
};

export default useModal;
