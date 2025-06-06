interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 font-medium text-gray-700 dark:text-gray-300 select-none ${
        className ?? ""
      }`}
    >
      {children}
    </label>
  );
};
