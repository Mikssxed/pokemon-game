import clsx from "clsx";
import { FC } from "react";

type Props = {
  children: string | JSX.Element;
  onClick?: () => void;
  className?: string;
};

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx(
        className,
        " bg-gold-700 border-2 border-white rounded-2xl py-4 px-5 text-black text-2xl font-bold w-full"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
