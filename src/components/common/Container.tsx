import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 ${className}`}>
      {children}
    </div>
  );
}
