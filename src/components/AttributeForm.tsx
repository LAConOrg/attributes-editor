import { TextField } from './fields/TextField';
import { DropdownField } from './fields/DropdownField';
import { DateTimeField } from './fields/DateTimeField';
import { BooleanField } from './fields/BooleanField';
import { YAML_KEYS } from '../types/attributes';
import type { AttributeValues } from '../types/attributes';

interface AttributeFormProps {
  values: AttributeValues;
  onChange: (key: string, value: string | undefined) => void;
  disabled: boolean;
}

export function AttributeForm({ values, onChange, disabled }: AttributeFormProps) {
  const handleChange = (key: string) => (value: string) => {
    onChange(key, value || undefined);
  };

  return (
    <div className="attribute-form">
      <h2 className="attribute-form-title">Form</h2>
      <div className="attribute-form-fields">
        <TextField
          label="Registration ID"
          yamlKey={YAML_KEYS.REG_ID}
          value={values[YAML_KEYS.REG_ID] || ''}
          onChange={handleChange(YAML_KEYS.REG_ID)}
          required
          disabled={disabled}
          validateNumeric
        />
        <TextField
          label="Name"
          yamlKey={YAML_KEYS.NAME}
          value={values[YAML_KEYS.NAME] || ''}
          onChange={handleChange(YAML_KEYS.NAME)}
          required
          disabled={disabled}
        />
        <TextField
          label="Badge name"
          yamlKey={YAML_KEYS.BADGE_NAME}
          value={values[YAML_KEYS.BADGE_NAME] || ''}
          onChange={handleChange(YAML_KEYS.BADGE_NAME)}
          required
          disabled={disabled}
        />
        <DropdownField
          label="Membership type"
          yamlKey={YAML_KEYS.MEMBERSHIP_TYPE}
          value={values[YAML_KEYS.MEMBERSHIP_TYPE] || ''}
          onChange={handleChange(YAML_KEYS.MEMBERSHIP_TYPE)}
          required
          disabled={disabled}
        />
        <DateTimeField
          label="Membership purchase time"
          yamlKey={YAML_KEYS.REGISTRATION_TIMESTAMP}
          value={values[YAML_KEYS.REGISTRATION_TIMESTAMP] || ''}
          onChange={handleChange(YAML_KEYS.REGISTRATION_TIMESTAMP)}
          required
          disabled={disabled}
        />
        <BooleanField
          label="Must use username"
          yamlKey={YAML_KEYS.MUST_USE_USERNAME}
          value={values[YAML_KEYS.MUST_USE_USERNAME] || ''}
          onChange={handleChange(YAML_KEYS.MUST_USE_USERNAME)}
          disabled={disabled}
        />
        <TextField
          label="Manually created by"
          yamlKey={YAML_KEYS.MANUALLY_CREATED_BY}
          value={values[YAML_KEYS.MANUALLY_CREATED_BY] || ''}
          onChange={handleChange(YAML_KEYS.MANUALLY_CREATED_BY)}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
