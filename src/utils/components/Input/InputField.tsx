import styles from "./InputField.module.css";

interface IInput {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  children?: React.ReactNode;
}

export const InputField: React.FC<IInput> = ( { children,id, name, value, placeholder, type = "text", onChange}) => {
  return (
    <div className={styles.form__group}>
    <label htmlFor={id} className={styles.form__label}>
      {name}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={styles.form__input}
      placeholder={placeholder}
    />
    {children}
  </div>
  );
};
export default InputField;
  

