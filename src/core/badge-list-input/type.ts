export interface IBadgeListInputProps {
  label: string;
  onSubmit: (badges: string[]) => void;
}

export type Badge = {
  value: string;
  id: number;
};
