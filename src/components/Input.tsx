import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  isRequired?: boolean;
  additionalClassname?: string;
  additionalOptions?: RegisterOptions;
}

const Input = (props: InputProps) => {
  const {
    name,
    isRequired,
    type,
    label,
    placeholder,
    additionalClassname,
    additionalOptions,
    ...rest
  } = props;

  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-sm">{label || <>&nbsp;</>}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          'h-10 w-full min-w-[243px] lg:min-w-full lg:w-48 rounded-lg border pl-2 outline-none placeholder:text-slate-400 focus:ring-1  transition-all',
          additionalClassname,
          !!formState.errors[name]?.message
            ? 'border-red-500 focus:ring-red-600 focus:border-red-600'
            : 'border-primary focus:ring-tertiary focus:border-tertiary'
        )}
        {...register(name, {
          ...(isRequired && { required: 'Required' }),
          ...additionalOptions,
        })}
        {...rest}
      />
      <span className="text-xs text-red-500">
        {(formState.errors[name]?.message as string) || <>&nbsp;</>}
      </span>
    </div>
  );
};
export default Input;
