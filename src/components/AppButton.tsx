
interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: string;
}

const AppButton: React.FC<AppButtonProps> = ({ className, type, children }) => {
  return (
    <button
        className={`px-4 py-2 text-white rounded-full ${className}`}
        type={type}
    >
      {children}
    </button>
  );
}

export default AppButton;