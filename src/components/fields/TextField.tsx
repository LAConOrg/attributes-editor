import { useState } from 'react';

interface TextFieldProps {
  label: string;
  yamlKey: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  validateNumeric?: boolean;
}

export function TextField({
  label,
  yamlKey,
  value,
  onChange,
  required = false,
  disabled = false,
  validateNumeric = false,
}: TextFieldProps) {
  const [touched, setTouched] = useState(false);

  const isEmpty = !value || value.trim() === '';
  const isInvalidNumeric = validateNumeric && value && !/^\d*$/.test(value);

  const showRequiredError = touched && required && isEmpty;
  const showNumericError = validateNumeric && isInvalidNumeric;

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="field">
      <label className="field-label">
        {label}
        {required && <span className="field-required">*</span>}
      </label>
      <div className="field-key">{yamlKey}</div>
      <input
        type="text"
        className={`field-input ${showRequiredError || showNumericError ? 'field-input-error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handleBlur}
        disabled={disabled}
      />
      {showRequiredError && (
        <div className="field-error" role="alert">
          This field is required
        </div>
      )}
      {showNumericError && (
        <div className="field-error" role="alert">
          Must contain only digits
        </div>
      )}
    </div>
  );
}
