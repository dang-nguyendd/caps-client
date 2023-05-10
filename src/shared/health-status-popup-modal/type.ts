export interface IHealthStatusPopupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (healthStatus: IHealthStatus) => void;
}
export interface IHealthStatus {
  feeling: string;
  symptoms: string[];
}

export const allSymptoms = [
  "Fever",
  "Cough",
  "Shortness of breath",
  "Fatigue",
  "Muscle or body aches",
  "Headache",
  "New loss of taste or smell",
  "Sore throat",
  "Congestion or runny nose",
  "Nausea or vomiting",
  "Diarrhea",
];
