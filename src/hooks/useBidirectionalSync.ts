import { useState, useRef, useCallback } from 'react';
import { parseYaml, dumpYaml } from '../utils/yamlParser';
import type { AttributeValues } from '../types/attributes';

type ChangeSource = 'yaml' | 'form';

interface UseBidirectionalSyncReturn {
  yamlString: string;
  parsedValues: AttributeValues;
  parseError: string | null;
  handleYamlChange: (yaml: string) => void;
  handleFormChange: (key: string, value: string | undefined) => void;
}

export function useBidirectionalSync(initialYaml: string = ''): UseBidirectionalSyncReturn {
  const [yamlString, setYamlString] = useState(initialYaml);
  const [parsedValues, setParsedValues] = useState<AttributeValues>(() => {
    const result = parseYaml(initialYaml);
    return result.success ? result.data : {};
  });
  const [parseError, setParseError] = useState<string | null>(null);

  const changeSourceRef = useRef<ChangeSource | null>(null);

  const handleYamlChange = useCallback((yaml: string) => {
    if (changeSourceRef.current === 'form') {
      changeSourceRef.current = null;
      return;
    }

    changeSourceRef.current = 'yaml';
    setYamlString(yaml);

    const result = parseYaml(yaml);
    if (result.success) {
      setParsedValues(result.data);
      setParseError(null);
    } else {
      setParseError(result.error);
    }

    changeSourceRef.current = null;
  }, []);

  const handleFormChange = useCallback((key: string, value: string | undefined) => {
    if (changeSourceRef.current === 'yaml') {
      return;
    }

    changeSourceRef.current = 'form';

    const newValues = { ...parsedValues };
    if (value === undefined || value === '') {
      delete newValues[key];
    } else {
      newValues[key] = value;
    }

    setParsedValues(newValues);
    const newYaml = dumpYaml(newValues);
    setYamlString(newYaml);
    setParseError(null);

    changeSourceRef.current = null;
  }, [parsedValues]);

  return {
    yamlString,
    parsedValues,
    parseError,
    handleYamlChange,
    handleFormChange,
  };
}
