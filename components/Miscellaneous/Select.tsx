import { useState, useEffect } from "react";
import Creatable from "react-select/creatable";
import { useField, ErrorMessage } from "formik";
import styles from "./styles/Select.module.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  label: string;
  name: string;
  defaultValue?: string | string[];
  isMulti?: boolean;
}

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#1e1e1e",
    border: "1px solid #2a2a2a",
    fontSize: "15px",
    boxShadow: "none",
    minHeight: "0",
    borderRadius: "4px",
    "&:hover": {
      outline: "none",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: "#1e1e1e",
    color: "#fff",
    fontSize: "15px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isFocused ? "#2d2d2d" : undefined,
  }),
  multiValue: (provided: any) => ({
    ...provided,
    backgroundColor: "#2d2d2d",
    color: "#fff",
  }),
  multiValueLabel: (provided: any) => ({
    ...provided,
    color: "#fff",
  }),
};

const Select = ({
  options,
  label,
  name,
  defaultValue,
  isMulti,
}: SelectProps) => {
  const [field, meta, helpers] = useField(name);

  const onChange = (e: any) => {
    const value = isMulti ? e.map((option: Option) => option.value) : e.value;
    helpers.setValue(value);
  };

  useEffect(() => {
    if (defaultValue) {
      helpers.setValue(defaultValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toOption = (value: string) => {
    return {
      value,
      label: value,
    };
  };

  const defaultSelectValue = () => {
    if (defaultValue) {
      if (isMulti) {
        return (defaultValue as string[]).map((value) => toOption(value));
      }
      return toOption(defaultValue as string);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <Creatable
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        defaultValue={defaultSelectValue()}
        isClearable
        styles={selectStyles}
        onBlur={() => helpers.setTouched(true)}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <span className={styles.error}>{msg}</span>}
      />
    </div>
  );
};

export default Select;
