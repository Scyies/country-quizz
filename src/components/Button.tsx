import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...rest }: IProps) {
  function btnVariant() {
    const secondary =
      'rounded-lg border-2 border-blue-800 px-8 py-2 font-medium text-blue-800 text-xl self-center';
    const primary =
      'rounded-lg border border-yellow-500 bg-yellow-500 px-8 py-2 font-medium text-white text-xl self-end';
    if (variant === 'secondary') {
      return secondary;
    }
    return primary;
  }
  return (
    <button className={btnVariant()} {...rest}>
      {children}
    </button>
  );
}
