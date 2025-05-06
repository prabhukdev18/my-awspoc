import { Field } from "formik";
import type { FieldProps } from "formik";

import React from "react";

interface ITextFormFieldProps {
  type?: "text" | "email";
  name: string;
  label?: string;
  placeHolder?: string;
  labelclass?: string;
  inputClassName?: string;
  isrequired?: boolean;
}

const TextFormField: React.FC<ITextFormFieldProps> = ({
  type = "text",
  name,
  isrequired = false,
  label = name,
  placeHolder = name,
  labelclass = "text-base font-medium text-gray-800",
  inputClassName = "border border-gray-300 focus:border-blue-500 focus:outline-none  rounded-md p-2",
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col mb-4 text-start gap-y-1">
          <label htmlFor={name} className={labelclass}>
            <div className="flex flex-row justify-start gap-x-1">
              <div className="">{label}</div>
              {isrequired&&<span className="text-red-500">*</span>}
            </div>
          </label>
          <input
            {...field}
            id={name}
            type={type}
            placeholder={placeHolder}
            className={
              meta.touched && meta.error
                ? "rounded-md border border-red-500 p-2 focus:outline-none"
                : inputClassName
            }
          />
          {meta.touched && meta.error && (
            <div className="text-sm text-red-500 mt-1">
              {meta.error.includes("name@example.com") ? (
                <>
                  {" "}
                  Use valid email format: <u>name@example.com</u>
                </>
              ) : (
                meta.error
              )}
            </div>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextFormField;
