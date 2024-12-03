import { apiService } from "@/proxy/apiService";
import { Button } from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Login.module.css";
import useForm from "@/hooks/useForm";
import InputField from "../Input/InputField";
import { FieldName } from "@/domain/formActionType";
import { useNavigate } from "react-router-dom";
import { ModuleRoutes } from "@/router/routes";
import { useState } from "react";
import Alert from "../Alert/Alert";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { useVisibilityContext } from "@/context/VisibilityContext";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { toggles, setActive } = useVisibilityContext();
  const navigate = useNavigate();
  const { formData, errors, handleChange, handleSubmit } = useForm([
    FieldName.username,
    FieldName.password,
  ]);
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = handleSubmit();

    if (isValid) {
      try {
        const response = await apiService.login({
          username: formData.username,
          password: formData.password,
        });

        if (response.success) {
          sessionStorage.setItem("accessToken", response.data.accessToken);
          sessionStorage.setItem("firstname", response.data.firstName);
          navigate(ModuleRoutes.HOME);
        } else {
          setErrorMessage(response.message); 
        }
      } catch (error) {
         throw error
      }
    }
  };

  const handleForgotPassword = () => {
    setActive("forgotPassword", true);
  };

  const handlePasswordResetSubmit = (email:string) => {
    if (!email) {
      setErrorMessage("Error en el envio."); 
    }
    setActive("forgotPassword", false);
    setActive("alert", true);
  };

  const closeAlert = () => {
    setActive("alert", false);
  };
  return (
    <div className={styles["login"]}>
      <div className={styles["login__container"]}>
        <div className={styles["login__welcomeSection"]}>
          <Logo styleLogo="login__logo" />
          <p className={styles["login__description"]}>
            Un espacio creado para hacer tus compras más fáciles y rápidas.
            Aquí, la variedad y la comodidad se combinan para ofrecerte una
            experiencia de compra sencilla y accesible, siempre a tu alcance.
          </p>
        </div>
        <form className={styles["login__signInSection"]} onSubmit={onSubmit}>
          <h2 className={styles["login__subtitle"]}>Bienvenido</h2>
          <div className={styles["login__containerInput"]}>
            <InputField
              name="username"
              id="username"
              label="Usuario"
              placeholder="nombre de usuario"
              value={formData.username}
              onChange={handleChange}
              styleLabel="login__label"
            >
              {errors.username && (
                <p className={styles.error}>{errors.username}</p>
              )}
            </InputField>
            <InputField
              name="password"
              id="password"
              type="password"
              label="Clave"
              placeholder="Clave"
              value={formData.password}
              onChange={handleChange}
              styleLabel="login__label"
            >
              {errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </InputField>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
          <Button type="submit" name="Ingresar" styleButton="login__button" />
          <div
            className={styles["login__forgotPassword"]}
            role="button"
            onClick={handleForgotPassword}
          >
            Olvidé contraseña?
          </div>
        </form>
        {toggles['forgotPassword'] && (
          <ForgotPassword
            title="Recuperar Contraseña"
            textButton="Enviar"
            onClick={handlePasswordResetSubmit}
          />
        )}
        {toggles["alert"] && (
          <Alert
            title="Envío Exitoso"
            icon="✔️"
            message="Se envió la información al correo ingresado"
            textButton="Aceptar"
            onClose={closeAlert}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
