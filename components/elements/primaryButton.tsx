import React, { ReactNode } from "react";

function PrimaryButton({ children }: { children: ReactNode }) {
  return <div className="mt-16 py-3 px-12 bg-primary text-white rounded-2xl">{children}</div>;
}

export default PrimaryButton;
