import React, { useState } from "react";

import { useImmer } from "use-immer";

import {
  CheckboxOptions,
  DefaultCheckboxOption,
} from "@/components/health-form/constant";
import BadgeListInput from "@/core/badge-list-input";
import Option from "@/core/select-option";
import { SelectOption } from "@/core/select-option/type";
import TextInput from "@/core/text-input";
import Textarea from "@/core/textarea";

const Component = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

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

  const _handleChangeAge = (value: string) => {
    setAge(value);
  };

  const _handleChangeWeight = (value: string) => {
    setWeight(value);
  };

  const _handleChangeHeight = (value: string) => {
    setHeight(value);
  };

  const _handleChangeBloodPressure = (value: string) => {
    setBloodPressure(value);
  };

  const _handleChangeBloodType = (value: string) => {
    setBloodType(value);
  };

  const _handleAllergiesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!allergies.includes(value)) {
      setAllergies([...allergies, value]);
    }
  };

  const _handleAllergiesDelete = (value: string) => {
    setAllergies(allergies.filter((allergy) => allergy !== value));
  };

  const _handleMedicationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!medications.includes(value)) {
      setMedications([...medications, value]);
    }
  };

  const _handleHasSurgery = (value: SelectOption) => {
    setHasSurgery(value);
  };

  const _handleHasChronicIllness = (value: SelectOption) => {
    setHasChronicIllness(value);
  };

  const _handleHasHereditaryDisease = (value: SelectOption) => {
    setHasHereditaryDisease(value);
  };

  const _handleMedicationsDelete = (value: string) => {
    setMedications(medications.filter((medication) => medication !== value));
  };

  const _handleSurgeryDescription = (value: string) => {
    setSurgeryDescription(value);
  };

  const _handleChangeChronicIllnessDescription = (value: string) => {
    setChronicIllnessDescription(value);
  };

  const _handleChangeFamilyHistoryDescription = (value: string) => {
    setFamilyHistoryDescription(value);
  };

  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
      <TextInput
        value={age}
        type="text"
        placeHolder="age"
        label="Age"
        name="age"
        onChange={(value) => _handleChangeAge(value)}
      />
      <TextInput
        value={weight}
        type="text"
        placeHolder="weight in kg"
        label="Weight"
        name="weight"
        onChange={(value) => _handleChangeWeight(value)}
      />
      <TextInput
        value={height}
        type="text"
        placeHolder="height in cm"
        label="Height"
        name="height"
        onChange={(value) => _handleChangeHeight(value)}
      />

      <TextInput
        value={bloodPressure}
        type="text"
        placeHolder="blood pressure"
        label="Blood pressure"
        name="blood-pressure"
        onChange={(value) => _handleChangeBloodPressure(value)}
      />
      <TextInput
        value={bloodType}
        type="text"
        placeHolder="blood type"
        label="Blood type"
        name="blood-type"
        onChange={(value) => _handleChangeBloodType(value)}
      />
      <TextInput
        value={bloodType}
        type="text"
        placeHolder="blood type"
        label="Blood type"
        name="blood-type"
        onChange={(value) => _handleChangeBloodType(value)}
      />
      <BadgeListInput label="Allergies" onSubmit={() => {}} />
      <BadgeListInput label="Medications" onSubmit={() => {}} />

      <div className="col-span-3">
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasSurgery}
          onChange={_handleHasSurgery}
          title="Have you ever had surgery?"
          dataKey="hasSurgery"
        />
      </div>
      <div className="col-span-3">
        <Textarea
          value={surgeryDescription}
          onChange={_handleSurgeryDescription}
          label="Please describe your surgery history"
        />
      </div>
      <div className="col-span-3">
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasChronicIllness}
          onChange={_handleHasChronicIllness}
          title="Do you have any chronic illnesses?"
          dataKey="hasChronicIllness"
        />
      </div>
      <div className="col-span-3">
        <Textarea
          value={chronicIllnessDescription}
          onChange={_handleChangeChronicIllnessDescription}
          label="Please describe any chronic illnesses you have"
        />
      </div>
      <div className="col-span-3">
        <Option
          type="checkbox"
          options={CheckboxOptions}
          selectedOption={hasHereditaryDisease}
          onChange={_handleHasHereditaryDisease}
          title="Is there a history of hereditary disease in your family?"
          dataKey="hasHereditaryDisease"
        />
      </div>
      <div className="col-span-3">
        <Textarea
          value={familyHistoryDescription}
          onChange={_handleChangeFamilyHistoryDescription}
          label="Please describe any history of hereditary diseases in your family"
        />
      </div>
    </div>
  );
};

Component.displayName = "HealthFormHealthData";

export default Component;
