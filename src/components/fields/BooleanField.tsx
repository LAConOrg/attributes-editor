interface BooleanFieldProps {
  label: string;
  yamlKey: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function BooleanField({
  label,
  yamlKey,
  value,
  onChange,
  disabled = false,
}: BooleanFieldProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <div className="field-key">{yamlKey}</div>
      <select
        className="field-input"
        value={value === 'true' ? 'true' : ''}
        onChange={handleSelectChange}
        disabled={disabled}
      >
        <option value=""></option>
        <option value="true">Yes</option>
      </select>
    </div>
  );
}
