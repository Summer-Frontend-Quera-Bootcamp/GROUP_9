// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Hooks ========> //
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Iprops {
  type: string;
  name: string;
  labelText: string;
  hook: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const Input: React.FC<Iprops> = ({
  type,
  name,
  labelText,
  hook,
  errors,
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-xs">
      <label
        htmlFor={name}
        className="mt-[20px] font-IranYekan400 text-BodyS text-right"
      >
        {labelText}
      </label>
      <input
        type={type}
        {...hook(name)}
        id={name}
        className="w-full h-[40px] p-[5px] rounded-[6px] bg-inherite border border-[#AAA] "
      />
      {errors[name] && (
        <p className="font-IranYekan400 text-BodyXS text-Red-Primary">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
