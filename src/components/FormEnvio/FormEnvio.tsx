import { useState } from "react";
import styles from "./FormEnvio.module.css";
import { Button } from "../Button/Button";
import InputField from "../Input/InputField";
import { useDistrict } from "../../hooks/useDistrict";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import useForm from "../../hooks/useForm";
import { FieldName } from "@/domain/formActionType";
import { ModuleRoutes } from "@/router/routes";
const FormEnvio = () => {
  const navigate = useNavigate();
  const districts = useDistrict();
  const [showAlert, setShowAlert] = useState(false);
  const { clearCart } = useCartContext();
  const { formData, errors, handleChange, handleSubmit } =useForm([
    FieldName.Nombre,
    FieldName.Apellido,
    FieldName.Distrito,
    FieldName.Direccion,
    FieldName.Referencia,
    FieldName.Celular,
  ]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = handleSubmit();
    if (result) {
      setShowAlert(true);
      console.log("Formulario enviado con éxito:", formData);
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate(ModuleRoutes.HOME);
    clearCart();
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.form__title}>Detalles de Compra</h2>
        <div className={styles.form__fullName}>
          <InputField
            name="Nombre"
            id="Nombre"
            label="Nombre"
            placeholder="Ingrese su nombre"
            value={formData.Nombre}
            onChange={handleChange}
          >
            {errors.Nombre && (
              <p className={styles.error}>{errors.Nombre}</p>
            )}
          </InputField>
          <InputField
            name="Apellido"
            id="Apellido"
            label="Apellido"
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
            {districts.map((distrito) => (
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
          label="Dirección"
          placeholder="Ingrese su dirección"
          value={formData.Direccion}
          onChange={handleChange}
        />
        {errors.Direccion && <p className={styles.error}>{errors.Direccion}</p>}
        <InputField
          name="Referencia"
          id="Referencia"
          label="Referencia"
          placeholder="Ingrese la referencia"
          value={formData.Referencia}
          onChange={handleChange}
        >
          {errors.Referencia && <p className={styles.error}>{errors.Referencia}</p>}
        </InputField>
        <InputField
          name="Celular"
          id="Celular"
          label="Celular"
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
          textButton="Aceptar"
        />
      )}
    </>
  );
};

export default FormEnvio;
