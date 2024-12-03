import { Button } from "../Button/Button";
import InputField from "../Input/InputField";
import styles from "./ForgotPassword.module.css";
import useForm from "@/hooks/useForm";
import { FieldName } from "@/domain/formActionType";
interface IForgotPassword {
  title: string;
  textButton: string;
  onClick: (email: string) => void;
}
const ForgotPassword: React.FC<IForgotPassword> = ({
  title,
  textButton,
  onClick,
}) => {
  const { formData, errors, handleChange, handleSubmit } = useForm([FieldName.Email]);

  
  const handleValidate = () =>{
    const isValid = handleSubmit();
    if(isValid){
      onClick(formData.email);
    }
  }
  return (
    <div className={styles["forgotPassword"]}>
      <div className={styles["forgotPassword__content"]}>
        <h2 className={styles["forgotPassword__title"]}>{title}</h2>
        <InputField
          label="Correo Electrónico"
          backgroundInput="gris"
          name="email"
          value={formData.email}
          onChange={handleChange}
        >
          {errors.email && <p className={styles['error']}>{errors.email}</p>}
        </InputField>
        <Button
          name={textButton}
          styleButton="forgotPassword__button"
          onClick={handleValidate}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
