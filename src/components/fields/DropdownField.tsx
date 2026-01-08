import { useState, useMemo } from 'react';
import { MEMBERSHIP_TYPES, OTHER_OPTION_VALUE } from '../../constants/membershipTypes';

interface DropdownFieldProps {
  label: string;
  yamlKey: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
}

export function DropdownField({
  label,
  yamlKey,
  value,
  onChange,
  required = false,
  disabled = false,
}: DropdownFieldProps) {
  const [touched, setTouched] = useState(false);
  const [otherSelected, setOtherSelected] = useState(false);

  const isKnownValue = useMemo(() => {
    return MEMBERSHIP_TYPES.some((opt) => opt.value === value);
  }, [value]);

  const isOther = otherSelected || (value !== '' && !isKnownValue);

  const selectedValue = useMemo(() => {
    if (isOther) {
      return OTHER_OPTION_VALUE;
    }
    if (isKnownValue) {
      return value;
    }
    return '';
  }, [value, isKnownValue, isOther]);

  const otherTextValue = useMemo(() => {
    if (!isOther) {
      return '';
    }
    return value;
  }, [value, isOther]);

  const isEmpty = !value || value.trim() === '';
  const showRequiredError = touched && required && isEmpty;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (newValue === OTHER_OPTION_VALUE) {
      setOtherSelected(true);
      onChange('');
    } else {
      setOtherSelected(false);
      onChange(newValue);
    }
    setTouched(true);
  };

  const handleOtherTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

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
      <select
        className={`field-input ${showRequiredError ? 'field-input-error' : ''}`}
        value={selectedValue}
        onChange={handleSelectChange}
        onBlur={handleBlur}
        disabled={disabled}
      >
        <option value="">-- Select --</option>
        {MEMBERSHIP_TYPES.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
        <option value={OTHER_OPTION_VALUE}>Other</option>
      </select>
      {selectedValue === OTHER_OPTION_VALUE && (
        <input
          type="text"
          className={`field-input field-other-input ${showRequiredError ? 'field-input-error' : ''}`}
          value={otherTextValue}
          onChange={handleOtherTextChange}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder="Enter custom value"
        />
      )}
      {showRequiredError && (
        <div className="field-error" role="alert">
          This field is required
        </div>
      )}
    </div>
  );
}
