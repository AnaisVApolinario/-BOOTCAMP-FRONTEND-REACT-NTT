import {
  FormAction,
  formActionType,
  IFormState,
} from "../domain/formActionType";

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
    email: "",
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
    email: "",
  },
};

const FormReducer = (state: IFormState, action: FormAction): IFormState => {
  switch (action.type) {
    case formActionType.SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    case formActionType.SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.error,
        },
      };
    case formActionType.RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default FormReducer;
