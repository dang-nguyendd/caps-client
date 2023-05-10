import Link from "next/link";

import Button from "@/core/button";
import useDevice from "@/hooks/useDevice";

const Component = () => {
  const { isMobile } = useDevice();
  return (
    <div
      className={`mx-auto max-w-3xl px-4 py-8 ${
        isMobile ? "sm:px-6" : "lg:px-8"
      }`}
    >
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Form Instructions</h2>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Purpose</h3>
          <p className="text-gray-700">
            The purpose of this health form is to collect necessary information
            about your health, medical conditions, medications, allergies,
            emergency contacts, and other relevant information that can help us
            to assess your health status and provide appropriate advice.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-bold">Rules</h3>
          <p className="text-gray-700">
            Please make sure to read and follow the instructions carefully.
            Failure to do so may result in disqualification.
          </p>
          <ol className="list-decimal pt-5">
            <li>
              Please answer all questions truthfully and to the best of your
              knowledge.
            </li>
            <li>
              If you do not know the answer to a question, please leave it
              blank.
            </li>
            <li>
              By submitting this form, you acknowledge that you have read and
              agree to the data privacy policy.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Instruction</h3>
          <ul className="list-disc pb-5">
            <li>
              Blood pressure: Please enter your blood pressure in mmHg format
              (e.g. 120/80).
            </li>
            <li>
              Blood type: Please enter your blood type (e.g. A+, B-, AB+).
            </li>
            <li>Height: Please enter your height in centimeters.</li>
            <li>Weight: Please enter your weight in kilograms.</li>
            <li>
              Medical conditions: Please list any medical conditions you have
              been diagnosed with.
            </li>
            <li>
              Medications: Please list any medications you are currently taking.
            </li>
            <li>Allergies: Please list any allergies you have.</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Data Privacy</h3>
          <p className="text-gray-700">
            We take data privacy seriously. Your information will be kept
            confidential and only used for the purposes of this form.
          </p>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-gray-700">
            Estimated time: <span className="font-bold">15 minutes</span>
          </p>
        </div>
        <div>
          <Link href={"/health-form/health-data"}>
            <Button mode="primary">Start</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "HealthFormInstruction";

export default Component;
