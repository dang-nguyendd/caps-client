export interface IConversationModalProps {
  isOpen: boolean;
  name?: string;
  handleNameChange?: (T: any) => void;
  onClose: () => void;
  handleCancelClick: () => void;
  handleSaveClick: () => void;
}
