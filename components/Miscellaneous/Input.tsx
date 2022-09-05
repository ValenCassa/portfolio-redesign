import { useField, ErrorMessage } from "formik";
import styles from "./styles/Input.module.css";

const Input = ({
  name,
  label,
  type = "input",
}: {
  name: string;
  label: string;
  type?: "input" | "textarea";
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {type === "input" ? (
        <input
          {...field}
          className={styles.input}
          onChange={(e) => helpers.setValue(e.target.value)}
        />
      ) : (
        <textarea
          {...field}
          className={styles.input}
          onChange={(e) => helpers.setValue(e.target.value)}
          id={styles.textarea}
        />
      )}

      <ErrorMessage
        name={name}
        render={(msg) => <span className={styles.error}>{msg}</span>}
      />
    </div>
  );
};

export default Input;
