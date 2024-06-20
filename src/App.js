import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import Module from './Module';
import AddModuleButton from './AddModuleButton';

function App() {
  const [modules, setModules] = useState([<Module key={0} />]);

  const addModule = () => {
    setModules([...modules, <Module key={modules.length} />]);
  };

  return (
    <div className="App">
      <Title />
      <AddModuleButton onClick={addModule} />
      {modules}
    </div>
  );
}

export default App;
