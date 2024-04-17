import React, { ReactNode } from "react";

export const SectionLayout = ({
  children,
}: {
  children: JSX.Element | ReactNode;
}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1470px] w-full">{children}</div>
    </div>
  );
};
