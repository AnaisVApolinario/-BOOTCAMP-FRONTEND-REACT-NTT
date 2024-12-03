export const validateText = (value: string): string => {
  const letterTextPattern=/^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
  return letterTextPattern.test(value.trim())  ? '' : 'Debe ingresar un valor válido.';
};
export const validatePhone = (value: string): string => {
  const nineDigitPattern = /^[0-9]{9}$/;
  return nineDigitPattern.test(value) ? '' : 'Debe ingresar un número válido de 9 dígitos.';
};

export const validateDistrict = (value: string): string => {
  return value && value !== "default" ? '' : 'Campo obligatorio.';
};

export const validateAddressReference= (value: string): string => {
  const trimValue= value.trim();
  return  trimValue.length >=5 ? '' : 'Campo obligatorio.';
};

export const validateUsername = (value: string): string => {
  return value.trim().length >=3 ? '' : 'Debe ingresar un correo electrónico válido.';
};
export const validateEmail = (value: string): string => {
  const emailPattern = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
  return emailPattern.test(value.trim()) ? '' : 'Debe ingresar un correo electrónico válido.';
};
export const validatePassword = (value: string): string => {
  const trimValue= value.trim();
  return  trimValue.length >=8 ? '' : 'La contraseña debe tener al menos 8 caracteres';
};