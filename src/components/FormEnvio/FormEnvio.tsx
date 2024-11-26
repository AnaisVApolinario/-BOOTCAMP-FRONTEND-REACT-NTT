import { useState } from "react";
import styles from "./FormEnvio.module.css";
import { Button } from "../../utils/components/Button/Button";
import InputField from "../../utils/components/Input/InputField";
import {
  validateCelular,
  validateDireccion,
  validateDistrito,
  validateText,
} from "../../utils/helpers/validation";
import { useDistritos } from "../../hooks/useDistritos";
import Alert from "../../utils/components/Alert/Alert";
import { useNavigate } from "react-router-dom";
const FormEnvio = () => {
  const navigate = useNavigate();
  const distritos = useDistritos();
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Distrito: "",
    Direccion: "",
    Celular: "",
  });

  const [errors, setErrors] = useState({
    Nombre: "",
    Apellido: "",
    Distrito: "",
    Direccion: "",
    Celular: "",
  });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "Nombre":
      case "Apellido":
        return validateText(value);
      case "Celular":
        return validateCelular(value);
      case "Distrito":
        return validateDistrito(value);
      case "Direccion":
        return validateDireccion(value);
      default:
        return "";
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validar el campo
    setErrors({ ...errors, [name]: validateField(name, value) });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      Nombre: validateField("Nombre", formData.Nombre),
      Apellido: validateField("Apellido", formData.Apellido),
      Distrito: validateField("Distrito", formData.Distrito),
      Direccion: validateField("Direccion", formData.Direccion),
      Celular: validateField("Celular", formData.Celular),
    };

    setErrors(newErrors);

    // Revisar si hay errores o campos vacíos
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    const hasEmptyFields = Object.values(formData).some(
      (value) => value === ""
    );

    if (hasErrors || hasEmptyFields) {
      console.warn(
        "Formulario inválido. Revisa los errores y completa todos los campos."
      );
      return; // No enviar ni consologuear si hay errores
    }

    // Si no hay errores ni campos vacíos, enviar datos
    setShowAlert(true);
    console.log("Formulario enviado con éxito:", formData);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate('/'); 
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.form__title}>Detalles de Compra</h2>
        <div className={styles.form__fullName}>
          <InputField
            name="Nombre"
            id="Nombre"
            placeholder="Ingrese su nombre"
            value={formData.Nombre}
            onChange={handleChange}
          >
            {errors.Nombre && <p className={styles.error}>{errors.Nombre}</p>}
          </InputField>
          <InputField
            name="Apellido"
            id="Apellido"
            placeholder="Ingrese su apellido"
            value={formData.Apellido}
            onChange={handleChange}
          >
            {errors.Apellido && (
              <p className={styles.error}>{errors.Apellido}</p>
            )}
          </InputField>
        </div>

        <div className={styles.form__group}>
          <label htmlFor="Distrito" className={styles.form__label}>
            Distrito
          </label>
          <select
            id="Distrito"
            name="Distrito"
            value={formData.Distrito}
            onChange={handleChange}
            className={styles.form__select}
          >
            <option value="" disabled>
              Selecciona tu distrito
            </option>
            {distritos.map((distrito) => (
              <option key={distrito.id} value={distrito.name}>
                {distrito.name}
              </option>
            ))}
          </select>
          {errors.Distrito && <p className={styles.error}>{errors.Distrito}</p>}
        </div>
        <InputField
          name="Direccion"
          id="Direccion"
          placeholder="Ingrese su dirección"
          value={formData.Direccion}
          onChange={handleChange}
        />
        {errors.Direccion && <p className={styles.error}>{errors.Direccion}</p>}
        <InputField
          name="Celular"
          id="Celular"
          placeholder="Ingrese su número"
          value={formData.Celular}
          onChange={handleChange}
        >
          {errors.Celular && <p className={styles.error}>{errors.Celular}</p>}
        </InputField>
        <Button name="Comprar" type="submit" />
      </form>
      {showAlert && (
        <Alert
          title="Registro Exitoso"
          icon="✔️"
          message="Su pedido ha sido registrado con éxito."
          onClose={handleCloseAlert}
        />
      )}
    </>
  );
};

export default FormEnvio;
