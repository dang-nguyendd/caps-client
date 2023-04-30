export interface IModalProps {
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
