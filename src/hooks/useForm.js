import { useState } from 'react';

// Custom hook: logika form yang bisa dipakai ulang
export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (text) => {
    setValues((prev) => ({ ...prev, [field]: text }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = (onValid) => () => {
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onValid(values);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  // true jika masih ada field yang kosong (dipakai untuk menonaktifkan tombol)
  const hasEmpty = Object.values(values).some((v) => !String(v).trim());

  return { values, errors, handleChange, handleSubmit, reset, hasEmpty };
}
