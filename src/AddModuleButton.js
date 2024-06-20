import React from 'react';
import './AddModuleButton.css';

function AddModuleButton({ onClick }) {
    return (
        <button className="add-module-button" onClick={onClick}>
            + add module
        </button>
    );
}

export default AddModuleButton;