import React, { ReactNode } from "react";

interface CustomButton {
  className?: string,
  onClick?:React.MouseEventHandler,
  children: ReactNode
}

const NavButton = ({ className,onClick, children }: CustomButton) => {
  return (
    <button className={`hover:cursor-pointer ${className}`}
    onClick={onClick}>{children}</button>
  );
};

export default NavButton;
