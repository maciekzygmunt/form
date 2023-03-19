import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  additionalClassname?: string;
}

const Input = (props: InputProps) => {
  const { name, type, label, placeholder, additionalClassname, ...rest } = props;

  const { register, formState } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-sm">{label || <>&nbsp;</>}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          'h-10 rounded-lg border pl-2 outline-none placeholder:text-slate-400 focus:ring-1  transition-all',
          additionalClassname,
          !!formState.errors[name]?.message
            ? 'border-red-500 focus:ring-red-600 focus:border-red-600'
            : 'border-primary focus:ring-tertiary focus:border-tertiary'
        )}
        {...register(name, {
          required: 'Required',
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
