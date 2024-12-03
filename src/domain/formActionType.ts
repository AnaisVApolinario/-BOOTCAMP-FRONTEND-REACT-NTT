export interface IFormState {
  formData: {
    Nombre: string;
    Apellido: string;
    Distrito: string;
    Direccion: string;
    Referencia: string;
    Celular: string;
    username: string;
    password: string;
    email: string;
  };
  errors: {
    Nombre: string;
    Apellido: string;
    Distrito: string;
    Direccion: string;
    Referencia: string;
    Celular: string;
    username: string;
    password: string;
    email: string;
  };
}
export enum formActionType {
  SET_FORM_DATA = "SET_FORM_DATA",
  SET_ERRORS = "SET_ERRORS",
  CLEAR_ERRORS = "CLEAR_ERRORS",
  RESET_FORM = "RESET_FORM",
}

export type FormAction =
  | {
      type: formActionType.SET_FORM_DATA;
      payload: { field: string; value: string };
    }
  | {
      type: formActionType.SET_ERRORS;
      payload: { field: string; error: string };
    }
  | { type: formActionType.CLEAR_ERRORS }
  | { type: formActionType.RESET_FORM };

export enum FieldName {
  Nombre = "Nombre",
  Apellido = "Apellido",
  Celular = "Celular",
  Distrito = "Distrito",
  Direccion = "Direccion",
  Referencia = "Referencia",
  username = "username",
  password = "password",
  Email="email",
}
