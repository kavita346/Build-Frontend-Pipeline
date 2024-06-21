import { PipelineToolbar } from './toolbar/toolbar';
import { PipelineUI } from './ui/ui';
import { SubmitButton } from './submit/submit';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
