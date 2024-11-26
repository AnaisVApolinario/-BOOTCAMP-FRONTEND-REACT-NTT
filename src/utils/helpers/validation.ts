export const validateText = (value: string): string => {
  return /^[a-zA-Z\s]+$/.test(value) ? '' : 'Debe ingresar un valor válido.';
};
export const validateCelular = (value: string): string => {
  return /^[0-9]{9}$/.test(value) ? '' : 'Debe ingresar un número válido de 9 dígitos.';
};

export const validateDistrito = (value: string): string => {
  return value ? '' : 'Campo obligatorio.';
};

export const validateDireccion = (value: string): string => {
  return value ? '' : 'Campo obligatorio.';
};