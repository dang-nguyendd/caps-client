export enum BloodType {
  A,
  O,
  AB,
  Other,
  B,
}

export interface IHealthFormProps {
  age: string;
  height: string;
  weight: string;
  bloodPressure: string;
  bloodType: BloodType;
  allergies: string[];
  medications: string[];
  hasSurgery: boolean;
  surgeryDescription: string;
  hasChronicIllness: boolean;
  chronicIllnessDescription: string;
  hasHereditaryDisease: boolean;
  familyHistoryDescription: string;
}

export const DefaultHealthForm: IHealthFormProps = {
  age: "",
  height: "",
  weight: "",
  bloodPressure: "",
  bloodType: BloodType.A,
  allergies: [],
  medications: [],
  hasSurgery: false,
  surgeryDescription: "",
  hasChronicIllness: false,
  chronicIllnessDescription: "",
  hasHereditaryDisease: false,
  familyHistoryDescription: "",
};
