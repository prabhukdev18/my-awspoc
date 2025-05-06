import { Field, FieldProps } from "formik";
import React from "react";

interface ITextAreaFormFieldProps {
  type?: "text" | "email";
  name: string;
  label?: string;
  placeHolder?: string;
  labelclass?: string;
  inputClassName?: string;
}

const TextAreaFormField: React.FC<ITextAreaFormFieldProps> = ({
  type = "text",
  name,
  label = name,
  placeHolder = name,
  labelclass = "text-base font-medium text-gray-800",
  inputClassName = "border border-gray-300 focus:border-blue-500 focus:outline-none  rounded-md p-2 h-25",
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col mb-4">
          <label htmlFor={name} className={labelclass}>
            {label}
          </label>
          <textarea
            {...field}
            id={name}
           
            placeholder={placeHolder}
            className={
              meta.touched && meta.error
                ? "rounded-md border border-red-500 p-2 focus:outline-none"
                : inputClassName
            }
          />
          {meta.touched && meta.error && (
            <div className="text-sm text-red-500 mt-1">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextAreaFormField;
