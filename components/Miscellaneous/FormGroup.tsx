import { ReactNode } from "react";

const FormGroup = ({
  leftComponent,
  rightComponent,
}: {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}) => {
  return (
    <div className="formGroup">
      <div>{leftComponent}</div>
      <div>{rightComponent}</div>
    </div>
  );
};

export default FormGroup;
