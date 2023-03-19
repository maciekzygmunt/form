import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  additionalClassname?: string;
}

const Input = (props: InputProps) => {
  const { name, type, placeholder, additionalClassname, ...rest } = props;

  const { register } = useFormContext();

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        'h-10 rounded-lg border border-primary pl-2 outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-tertiary focus:border-tertiary transition-all',
        additionalClassname
      )}
      {...register(name)}
      {...rest}
    />
  );
};
export default Input;
