import React from 'react';
import './AddModuleButton.css';

function AddModuleButton({ onClick }) {
    return (
        <button className="add-module-button" onClick={onClick}>
            + Add Module
        </button>
    );
}

export default AddModuleButton;
