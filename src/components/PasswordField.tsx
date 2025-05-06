import { Field, FieldProps } from "formik";
import React, { useState } from "react";
import eye from "../assets/eye.svg";
import eyeoff from "../assets/eye-off.svg";

interface ITextFormFieldProps {
  name: string;
  label?: string;
  placeHolder?: string;
  labelclass?: string;
  inputClassName?: string;
}

const PasswordFormField: React.FC<ITextFormFieldProps> = ({
  name,
  label = name,
  placeHolder = name,
  labelclass = "text-base font-medium text-gray-800",
  inputClassName = "rounded-md border border-gray-300 p-2",
}) => {
  const [visible, setvisible] = useState<boolean>(false);

  const togglePwd = () => {
    setvisible(!visible);
  };
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col mb-4">
          <label htmlFor={name} className={labelclass}>
            {label}
          </label>
          <div
            className={`flex flex-row flex-start space-x-1 ${
              meta.touched && meta.error
                ? "rounded-md border border-red-500 p-2"
                : inputClassName
            }`}
          >
            <input
              {...field}
              id={name}
              type={!visible ? "password" : "text"}
              placeholder={placeHolder}
              className={"border-none focus:outline-none w-full"}
            />
            <div className="cursor-pointer w-6 h-full items-center-safe" onClick={togglePwd}>
              <img src={!visible ? eye : eyeoff}/>
            </div>
          </div>
          {meta.touched && meta.error && (
            <div className="text-sm text-red-500 mt-1">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default PasswordFormField;
