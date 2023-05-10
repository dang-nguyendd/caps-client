import React, { useState, useEffect } from "react";

import { IHealthFormProps } from "@/components/health-form/type";
import { BloodType } from "@/components/health-form/type";
import Button from "@/core/button";
import withSettings from "@/hoc/withSettings";

const Component = React.memo(() => {
  const testHealthRecord: IHealthFormProps = {
    age: "20",
    height: "164",
    weight: "55",
    bloodPressure: "120",
    bloodType: BloodType.B,
    allergies: [],
    medications: [],
    hasSurgery: true,
    surgeryDescription: "",
    hasChronicIllness: false,
    chronicIllnessDescription: "",
    hasHereditaryDisease: false,
    familyHistoryDescription: "",
  };
  const [healthRecord, setHealthRecord] =
    useState<IHealthFormProps>(testHealthRecord);
  return (
    <div className="grow p-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="px-8 py-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Age</h3>
            <p>{testHealthRecord.age}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Height</h3>
            <p>{testHealthRecord.height}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Weight</h3>
            <p>{testHealthRecord.weight}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Blood Pressure</h3>
            <p>{testHealthRecord.bloodPressure}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Blood Type</h3>
            <p>{testHealthRecord.bloodType}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Allergies</h3>
            <ul>
              {testHealthRecord.allergies.map((allergy, index) => (
                <li key={index}>{allergy}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Medications</h3>
            <ul>
              {testHealthRecord.medications.map((medication, index) => (
                <li key={index}>{medication}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Surgery</h3>
            <p>
              {testHealthRecord.hasSurgery
                ? testHealthRecord.surgeryDescription
                : "No"}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Chronic Illness</h3>
            <p>
              {testHealthRecord.hasChronicIllness
                ? testHealthRecord.chronicIllnessDescription
                : "No"}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Hereditary Disease</h3>
            <p>
              {testHealthRecord.hasHereditaryDisease
                ? testHealthRecord.familyHistoryDescription
                : "No"}
            </p>
          </div>
          <Button mode="primary">Edit</Button>
        </div>
      </div>
    </div>
  );
});

Component.displayName = "Health";

export default withSettings(Component, "Health Record");
