import React, { useState } from "react";

import { useImmer } from "use-immer";

import {
  CheckboxOptions,
  DefaultCheckboxOption,
} from "@/components/health-form/constant";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import Textarea from "@/core/textarea";

const Component = () => {
  const [bloodPressure, setBloodPressure] = useState("");
  const [bloodType, setBloodType] = useState("");

  const [allergies, setAllergies] = useState<string[]>([]);
  const [medications, setMedications] = useState<string[]>([]);
  const [hasSurgery, setHasSurgery] = useImmer<SelectOption>(
    DefaultCheckboxOption
  );
  const [surgeryDescription, setSurgeryDescription] = useState("");
  const [hasChronicIllness, setHasChronicIllness] = useImmer<SelectOption>(
    DefaultCheckboxOption
  );
  const [chronicIllnessDescription, setChronicIllnessDescription] =
    useState("");
  const [hasHereditaryDisease, setHasHereditaryDisease] =
    useImmer<SelectOption>(DefaultCheckboxOption);
  const [familyHistoryDescription, setFamilyHistoryDescription] = useState("");

  const handleChangeBloodPressure = (value: string) => {
    setBloodPressure(value);
  };

  const handleChangeBloodType = (value: string) => {
    setBloodType(value);
  };

  const handleAllergiesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!allergies.includes(value)) {
      setAllergies([...allergies, value]);
    }
  };

  const handleAllergiesDelete = (value: string) => {
    setAllergies(allergies.filter((allergy) => allergy !== value));
  };

  const handleMedicationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!medications.includes(value)) {
      setMedications([...medications, value]);
    }
  };

  const handleMedicationsDelete = (value: string) => {
    setMedications(medications.filter((medication) => medication !== value));
  };

  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      <div>
        <div className="flex">
          <div className="mr-2 flex-1">
            <TextInput
              value={bloodPressure}
              type="text"
              placeHolder="blood pressure"
              label="Blood pressure"
              name="blood-pressure"
              onChange={(value) => handleChangeBloodPressure(value)}
            />
          </div>
          <div className="ml-2 flex-1">
            <TextInput
              value={bloodType}
              type="text"
              placeHolder="blood type"
              label="Blood type"
              name="blood-type"
              onChange={(value) => handleChangeBloodType(value)}
            />
          </div>
        </div>
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasSurgery}
          onChange={() => {}}
          title="Have you ever had surgery?"
          dataKey="hasSurgery"
        />
        <Textarea
          value="surgeryHistory"
          label="Please describe your surgery history"
        />
      </div>
      <div className="ml-10">
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasChronicIllness}
          onChange={() => {}}
          title="Do you have any chronic illnesses?"
          dataKey="hasChronicIllness"
        />
        <Textarea
          value="chronicIllness"
          label="Please describe any chronic illnesses you have"
        />
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasHereditaryDisease}
          onChange={() => {}}
          title="Is there a history of hereditary disease in your family?"
          dataKey="hasHereditaryDisease"
        />
        <Textarea
          value="hereditaryDisease"
          label="Please describe any history of hereditary diseases in your family"
        />
      </div>
    </div>
  );
};

Component.displayName = "HealthFormHealthRecord";

export default Component;
