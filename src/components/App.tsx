import { useBidirectionalSync } from '../hooks/useBidirectionalSync';
import { YamlEditor } from './YamlEditor';
import { ErrorDisplay } from './ErrorDisplay';
import { AttributeForm } from './AttributeForm';
import './App.css';

function App() {
  const { yamlString, parsedValues, parseError, handleYamlChange, handleFormChange } =
    useBidirectionalSync();

  return (
    <div className="app">
      <header className="app-header">
        <h1>LAcon V Online Attributes Editor</h1>
      </header>
      <ErrorDisplay error={parseError} />
      <main className="app-main">
        <YamlEditor value={yamlString} onChange={handleYamlChange} hasError={!!parseError} />
        <AttributeForm
          values={parsedValues}
          onChange={handleFormChange}
          disabled={!!parseError}
        />
      </main>
    </div>
  );
}

export default App;
