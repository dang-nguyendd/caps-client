export interface IChatModalProps {
  isOpen: boolean;
  name?: string;
  handleNameChange: (T: any) => void;
  onClose: () => void;
  handleCancelClick: () => void;
  handleSaveClick: () => void;
}
