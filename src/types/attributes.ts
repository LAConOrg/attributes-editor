export const YAML_KEYS = {
  REG_ID: 'worldcon.org/reg-id',
  NAME: 'worldcon.org/name',
  BADGE_NAME: 'worldcon.org/badge-name',
  MEMBERSHIP_TYPE: 'worldcon.org/membership-type',
  REGISTRATION_TIMESTAMP: 'worldcon.org/registration-timestamp',
  MANUALLY_CREATED_BY: 'worldcon.org/manually-created-by',
} as const;

export type YamlKey = (typeof YAML_KEYS)[keyof typeof YAML_KEYS];

export type AttributeValues = Partial<Record<string, string>>;

export interface FieldConfig {
  key: YamlKey;
  label: string;
  type: 'text' | 'numeric' | 'dropdown' | 'datetime';
  required: boolean;
}

export const FIELD_CONFIGS: FieldConfig[] = [
  { key: YAML_KEYS.REG_ID, label: 'Registration ID', type: 'numeric', required: true },
  { key: YAML_KEYS.NAME, label: 'Name', type: 'text', required: true },
  { key: YAML_KEYS.BADGE_NAME, label: 'Badge name', type: 'text', required: true },
  { key: YAML_KEYS.MEMBERSHIP_TYPE, label: 'Membership type', type: 'dropdown', required: true },
  { key: YAML_KEYS.REGISTRATION_TIMESTAMP, label: 'Membership purchase time', type: 'datetime', required: true },
  { key: YAML_KEYS.MANUALLY_CREATED_BY, label: 'Manually created by', type: 'text', required: false },
];
