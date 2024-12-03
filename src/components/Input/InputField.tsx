import styles from "./InputField.module.css";

interface IInput {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  children?: React.ReactNode;
  styleLabel?: string;
  backgroundInput?: string;
}

export const InputField: React.FC<IInput> = ({
  children,
  id,
  name,
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  styleLabel="form__label",
  backgroundInput=""
}) => {
  const inputClassName = `${styles["form__input"]} ${
    backgroundInput ? styles[`form__input--${backgroundInput}`] : ""
  }`;
  return (
    <div className={styles["form__group"]}>
      <label htmlFor={id} className={styles[styleLabel]}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
        placeholder={placeholder}

      />
      {children}
    </div>
  );
};
export default InputField;
