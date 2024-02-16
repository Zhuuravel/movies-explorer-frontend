import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";

function useFormValidation() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  function onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    if (name === "name" && target.validity.patternMismatch) {
      target.setCustomValidity(
        "Поле Имя может содержать только латиницу, кириллицу, пробел или дефис."
      );
    } else if (name === "email" && !isEmail(value)) {
      target.setCustomValidity(
        "Некорректный формат e-mail."
      );
    } else {
      target.setCustomValidity("");
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setValid(target.closest("form").checkValidity());
  }

  const resetValidation = useCallback(
    (isValid = false, values = {}, errors = {}) => {
      setValid(isValid);
      setValues(values);
      setErrors(errors);
    },
    [setValid, setValues, setErrors]
  );

  return {
    values,
    errors,
    isValid,
    onChange,
    resetValidation,
  };
}

export default useFormValidation;