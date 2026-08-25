import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';
  
  const variants = {
    primary: 'bg-gradient-to-b from-emerald-2 to-emerald text-[#F5EEDE] border border-emerald/90 shadow-[0_10px_26px_-12px_rgba(15,74,60,0.55)] hover:shadow-[0_16px_34px_-14px_rgba(15,74,60,0.65)] hover:brightness-105 hover:-translate-y-0.5 focus:ring-emerald',
    secondary: 'bg-ivory text-emerald border border-sand hover:border-gold-2 hover:text-emerald-2 hover:-translate-y-0.5 focus:ring-emerald',
    outline: 'border border-gold-2 text-ink bg-[#FAF5EB]/90 hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 focus:ring-gold backdrop-blur-sm',
    ghost: 'text-ink hover:text-emerald hover:bg-sand/30 focus:ring-emerald',
    gold: 'bg-gradient-to-r from-gold to-gold-2 text-[#FAF5EB] border border-gold hover:brightness-105 hover:-translate-y-0.5 shadow-sm focus:ring-gold',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none hover:bg-initial shadow-none'
    : 'cursor-pointer';

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
