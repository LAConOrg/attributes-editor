export const YAML_KEYS = {
  NOTES: 'notes',
  REG_ID: 'worldcon.org/reg-id',
  NAME: 'worldcon.org/name',
  BADGE_NAME: 'worldcon.org/badge-name',
  MEMBERSHIP_TYPE: 'worldcon.org/membership-type',
  REGISTRATION_TIMESTAMP: 'worldcon.org/registration-timestamp',
  MANUALLY_CREATED_BY: 'worldcon.org/manually-created-by',
  MUST_USE_USERNAME: 'worldcon.org/must-use-username',
} as const;

export type YamlKey = (typeof YAML_KEYS)[keyof typeof YAML_KEYS];

export type AttributeValues = Partial<Record<string, string>>;

export interface FieldConfig {
  key: YamlKey;
  label: string;
  type: 'text' | 'numeric' | 'dropdown' | 'datetime' | 'boolean';
  required: boolean;
}

export const FIELD_CONFIGS: FieldConfig[] = [
  { key: YAML_KEYS.REG_ID, label: 'Registration ID', type: 'numeric', required: true },
  { key: YAML_KEYS.NAME, label: 'Name', type: 'text', required: true },
  { key: YAML_KEYS.BADGE_NAME, label: 'Badge name', type: 'text', required: true },
  { key: YAML_KEYS.MEMBERSHIP_TYPE, label: 'Membership type', type: 'dropdown', required: true },
  { key: YAML_KEYS.REGISTRATION_TIMESTAMP, label: 'Membership purchase time', type: 'datetime', required: true },
  { key: YAML_KEYS.MUST_USE_USERNAME, label: 'Must use username', type: 'boolean', required: false },
  { key: YAML_KEYS.MANUALLY_CREATED_BY, label: 'Manually created by', type: 'text', required: false },
];
