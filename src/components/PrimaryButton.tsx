import * as React from "react";

interface IPrimaryButtonProps {
  name: string;
  onclick: () => void;
  prefixIcon?: string;
  type?:"submit"|"button";
  isdisabled?:boolean;
  classNames?:React.HTMLAttributes<HTMLButtonElement>["className"];
}

const PrimaryButton: React.FunctionComponent<IPrimaryButtonProps> = (props) => {
  const { name, onclick, prefixIcon,classNames,type="button",isdisabled=false } = props;
  return (
    <button disabled={isdisabled}
      onClick={onclick}
      className={`px-6 py-2 text-white text-center rounded-lg ${isdisabled?'!bg-blue-200':'!bg-blue-600'} ` +classNames}
      type={type}
    >
      <div className="flex flex-row justify-center-safe contain-content md:gap-x-2 gap-x-1">
        {prefixIcon && <img src={prefixIcon} alt="icon" />}
        {name}
      </div>
    </button>
  );
};

export default PrimaryButton;
