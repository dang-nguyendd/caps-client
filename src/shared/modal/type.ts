export interface IModalProps {
  type: "success" | "warning" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  primaryButtonText: string;
  onPrimaryButtonClick: () => void;
  secondButton?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
}
