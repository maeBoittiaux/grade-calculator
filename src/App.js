import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './Title';
import Module from './Module';
import AddModuleButton from './AddModuleButton';
import Result from './Result';

function App() {
  const [modules, setModules] = useState([{ id: 0, grade: 0 }]);

  const addModule = () => {
    setModules([...modules, { id: modules.length, grade: 0 }]);
  };

  const updateGrade = (id, newGrade) => {
    const updatedModules = modules.map((module) =>
      module.id === id ? { ...module, grade: newGrade } : module
    );
    setModules(updatedModules);
  };

  const calculateAverage = () => {
    const total = modules.reduce((sum, module) => sum + parseFloat(module.grade || 0), 0);
    return (total / modules.length).toFixed(2);
  };

  return (
    <div className="App">
      <Title />
      <AddModuleButton onClick={addModule} />
      {modules.map((module, index) => (
        <Module key={module.id} id={module.id} updateGrade={updateGrade} />
      ))}
      <Result average={calculateAverage()} />
    </div>
  );
}

export default App;
