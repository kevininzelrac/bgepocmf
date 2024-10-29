interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`"transition-bg hover:bg-green-600"; w-auto cursor-pointer rounded-md border-none bg-green-700 px-2 py-1 font-bold text-white duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
