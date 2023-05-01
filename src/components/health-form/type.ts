export interface IHealthFormProps {
  age: number;
  height: number;
  weight: number;
  bloodPressure: string;
  allergies: string[];
  medications: string[];
  hasSurgery: boolean;
  surgeryDescription: string;
  hasChronicIllness: boolean;
  chronicIllnessDescription: string;
}

export const DefaultHealthForm: IHealthFormProps = {
  age: 0,
  height: 0,
  weight: 0,
  bloodPressure: "",
  allergies: [],
  medications: [],
  hasSurgery: false,
  surgeryDescription: "",
  hasChronicIllness: false,
  chronicIllnessDescription: "",
};
