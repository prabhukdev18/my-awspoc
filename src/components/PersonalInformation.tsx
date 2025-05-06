import * as React from "react";
import PrimaryButton from "./PrimaryButton";
import TextFormField from "./TextFormField";

interface IPersonalInformationProps {}

const PersonalInformation: React.FunctionComponent<
  IPersonalInformationProps
> = (props) => {
  return (
    <div className="w-full flex flex-col justify-start">
      <TextFormField
        name="fullname"
        label="Full Name"
        placeHolder="Full Name"
        isrequired
      />
      <PrimaryButton
        name="Continue"
        isdisabled={false}
        onclick={() => {}}
        type="button"
      />
    </div>
  );
};

export default PersonalInformation;
