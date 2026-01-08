interface YamlEditorProps {
  value: string;
  onChange: (yaml: string) => void;
  hasError: boolean;
}

export function YamlEditor({ value, onChange, hasError }: YamlEditorProps) {
  return (
    <div className="yaml-editor">
      <h2 className="yaml-editor-title">YAML</h2>
      <textarea
        className={`yaml-editor-textarea ${hasError ? 'yaml-editor-textarea-error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="Paste YAML here..."
      />
    </div>
  );
}
