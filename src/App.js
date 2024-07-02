import './App.css';
import CodeEditor from './CodeEditor';

function App() {
  return (
    <div style={{ padding: '20px' , backgroundColor:'#f0f0f0', height:'100vh'}}>
      <h1 style={{ textAlign:'center'}}>Code Editor</h1>
      <CodeEditor />
    </div>
  );
}

export default App;
