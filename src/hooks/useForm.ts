import { useReducer } from "react";
import {
  FieldName,
  formActionType,
  IFormState,
} from "../domain/formActionType";
import {
  validatePhone,
  validateAddressReference,
  validateDistrict,
  validateText,
  validatePassword,
  validateEmail,
  validateUsername,
} from "../utils/helpers/validation";
import FormReducer from "../context/FormReducer";

const useForm = (fieldsToValidate: FieldName[]) => {
  const initialState: IFormState = {
    formData: {
      Nombre: "",
      Apellido: "",
      Distrito: "",
      Direccion: "",
      Referencia: "",
      Celular: "",
      username: "",
      password: "",
      email:""
    },
    errors: {
      Nombre: "",
      Apellido: "",
      Distrito: "",
      Direccion: "",
      Referencia: "",
      Celular: "",
      username: "",
      password: "",
      email:""
    },
  };

  const validateField = (name: FieldName, value: string): string => {
    switch (name) {
      case FieldName.Nombre:
      case FieldName.Apellido:
        return validateText(value);
      case FieldName.Celular:
        return validatePhone(value);
      case FieldName.Distrito:
        return validateDistrict(value);
      case FieldName.Direccion:
      case FieldName.Referencia:
        return validateAddressReference(value);
      case FieldName.username:
        return validateUsername(value);
      case FieldName.password:
        return validatePassword(value);
      case FieldName.Email:
        return validateEmail(value);
      default:
        return "";
    }
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: formActionType.SET_FORM_DATA,
      payload: { field: name, value },
    });

    const error = validateField(name as FieldName, value);
    dispatch({
      type: formActionType.SET_ERRORS,
      payload: { field: name, error },
    });
  };

  const handleSubmit = () => {
    let hasErrors = false;
    fieldsToValidate.forEach((name) => {
      const value = state.formData[name];
      const error = validateField(name, value);
      if (error) {
        hasErrors = true;
        dispatch({
          type: formActionType.SET_ERRORS,
          payload: { field: name, error },
        });
      }
    });

    return !hasErrors;
  };

  return {
    formData: state.formData,
    errors: state.errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
