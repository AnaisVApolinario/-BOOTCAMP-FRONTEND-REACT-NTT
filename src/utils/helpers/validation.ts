export const validateText = (value: string): string => {
  // /^[a-zA-Z\s]+$/ que hace este regex?
  return /^[a-zA-Z\s]+$/.test(value) ? '' : 'Debe ingresar un valor válido.';
};

//spanglish?
export const validateCelular = (value: string): string => {
  // /^[0-9]{9}$/ qu'e hace esto?
  return /^[0-9]{9}$/.test(value) ? '' : 'Debe ingresar un número válido de 9 dígitos.';
};

//spanglish? l'inea 13 y 18 hacen lo mismo
export const validateDistrito = (value: string): string => {
  return value ? '' : 'Campo obligatorio.';
};

//spanglish?
export const validateDireccion = (value: string): string => {
  return value ? '' : 'Campo obligatorio.';
};