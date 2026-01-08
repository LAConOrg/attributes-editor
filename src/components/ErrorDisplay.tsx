interface ErrorDisplayProps {
  error: string | null;
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  if (!error) {
    return null;
  }

  return (
    <div className="error-display" role="alert">
      <strong>YAML Error:</strong> {error}
    </div>
  );
}
