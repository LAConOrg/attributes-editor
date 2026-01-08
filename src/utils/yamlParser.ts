import yaml from 'js-yaml';
import { YAML_KEYS } from '../types/attributes';

const FIELD_ORDER = [
  YAML_KEYS.REG_ID,
  YAML_KEYS.NAME,
  YAML_KEYS.BADGE_NAME,
  YAML_KEYS.MEMBERSHIP_TYPE,
  YAML_KEYS.REGISTRATION_TIMESTAMP,
  YAML_KEYS.MANUALLY_CREATED_BY,
];

export type ParseResult =
  | { success: true; data: Record<string, string> }
  | { success: false; error: string };

export function parseYaml(yamlString: string): ParseResult {
  try {
    const parsed = yaml.load(yamlString, { schema: yaml.JSON_SCHEMA });

    if (parsed === null || parsed === undefined) {
      return { success: true, data: {} };
    }

    if (typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { success: false, error: 'YAML must be a flat key-value structure' };
    }

    const data: Record<string, string> = {};
    const validKeys = FIELD_ORDER as readonly string[];

    for (const [key, value] of Object.entries(parsed as object)) {
      if (!validKeys.includes(key)) {
        return { success: false, error: `Unrecognized key: ${key}` };
      }
      if (value !== null && value !== undefined) {
        data[key] = String(value);
      }
    }

    return { success: true, data };
  } catch (e) {
    if (e instanceof yaml.YAMLException) {
      const line = e.mark?.line !== undefined ? e.mark.line + 1 : '?';
      return {
        success: false,
        error: `Line ${line}: ${e.reason || e.message}`,
      };
    }
    return { success: false, error: String(e) };
  }
}

export function dumpYaml(data: Record<string, string | undefined>): string {
  const orderedData: Record<string, string> = {};

  for (const key of FIELD_ORDER) {
    const value = data[key];
    if (value !== undefined && value !== '') {
      orderedData[key] = value;
    }
  }

  if (Object.keys(orderedData).length === 0) {
    return '';
  }

  return yaml.dump(orderedData, {
    schema: yaml.JSON_SCHEMA,
    quotingType: '"',
    lineWidth: -1,
    sortKeys: false,
  });
}
