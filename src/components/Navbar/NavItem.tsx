import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  children: string | JSX.Element;
  to: string;
};

const NavItem: FC<Props> = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "text-grey-600 h-full flex items-center justify-center text-xl font-semibold",
          isActive && "border-b-2 !text-white border-gold-600"
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
