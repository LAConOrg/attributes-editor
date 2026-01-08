import { useState, useMemo } from 'react';

interface DateTimeFieldProps {
  label: string;
  yamlKey: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
}

function utcIsoToDatetimeLocal(utcIso: string): string {
  if (!utcIso) {
    return '';
  }
  try {
    const date = new Date(utcIso);
    if (isNaN(date.getTime())) {
      return '';
    }
    const pad = (n: number) => n.toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());
    const hour = pad(date.getUTCHours());
    const minute = pad(date.getUTCMinutes());
    return `${year}-${month}-${day}T${hour}:${minute}`;
  } catch {
    return '';
  }
}

function datetimeLocalToUtcIso(datetimeLocal: string): string {
  if (!datetimeLocal) {
    return '';
  }
  try {
    const [datePart, timePart] = datetimeLocal.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00+00:00`;
  } catch {
    return '';
  }
}

export function DateTimeField({
  label,
  yamlKey,
  value,
  onChange,
  required = false,
  disabled = false,
}: DateTimeFieldProps) {
  const [touched, setTouched] = useState(false);

  const datetimeLocal = useMemo(() => utcIsoToDatetimeLocal(value), [value]);

  const isEmpty = !value || value.trim() === '';
  const showRequiredError = touched && required && isEmpty;

  const handleDatetimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDatetime = e.target.value;
    if (newDatetime) {
      onChange(datetimeLocalToUtcIso(newDatetime));
    } else {
      onChange('');
    }
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
      <div className="field-datetime-container">
        <input
          type="datetime-local"
          className={`field-input field-datetime-input ${showRequiredError ? 'field-input-error' : ''}`}
          value={datetimeLocal}
          onChange={handleDatetimeChange}
          onBlur={handleBlur}
          disabled={disabled}
        />
        <span className="field-timezone-label">UTC</span>
      </div>
      {showRequiredError && (
        <div className="field-error" role="alert">
          This field is required
        </div>
      )}
    </div>
  );
}
