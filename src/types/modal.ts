export interface ModalLayoutType {
  title: string;
  closeText: string;
  onClose: () => void;
  ActionText: string;
  onAction: () => void;
  children: React.ReactNode;
}

export type ModalType = "None" | "Success" | "PersonalBest" | "Custom";
