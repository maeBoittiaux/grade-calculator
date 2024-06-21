import React, { useState } from 'react';
import './App.css';
import Title from './Title';
import Module from './Module';
import AddModuleButton from './AddModuleButton';
import Result from './Result';
import Grade from './Grade';

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

  const deleteModule = (id) => {
    const updatedModules = modules.filter((module) => module.id !== id);
    setModules(updatedModules);
  };

  const calculateAverage = () => {
    const total = modules.reduce((sum, module) => sum + parseFloat(module.grade || 0), 0);
    return (total / modules.length).toFixed(2);
  };

  const finalGrade = calculateAverage();

  return (
    <div className="App">
      <Title />
      <AddModuleButton onClick={addModule} />
      {modules.map((module) => (
        <Module key={module.id} id={module.id} updateGrade={updateGrade} deleteModule={deleteModule} />
      ))}
      <Result average={finalGrade} />
      <Grade finalGrade={finalGrade} />
    </div>
  );
}

export default App;
