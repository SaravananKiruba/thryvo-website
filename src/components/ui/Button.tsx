interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variantStyles = {
    primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus:ring-indigo-500',
    secondary: 'bg-white text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-indigo-500',
    outline: 'bg-transparent text-indigo-600 ring-1 ring-inset ring-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
  };
  
  const sizeStyles = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-3.5 py-2.5 text-sm',
    large: 'px-4 py-3 text-base',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
