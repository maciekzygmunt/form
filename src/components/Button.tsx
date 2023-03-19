import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClassname?: string;
}

const Button = (props: ButtonProps) => {
  const { children, additionalClassname, ...rest } = props;
  return (
    <button
      className={clsx(
        'rounded-lg bg-primary py-2 px-4 text-white drop-shadow-md transition-all hover:bg-tertiary hover:drop-shadow-xl active:ring active:ring-secondary',
        additionalClassname
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
