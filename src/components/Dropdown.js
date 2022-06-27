import React from 'react';


const Dropdown = ({ options, selected, onSelectedChange }) => {

    const renderedOptions = options.map((option) => {

        if(option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value} className="item"
            onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    })

    return (
        <form action="">
            <label htmlFor="">Select a Color</label>
            <div className="item">{selected.label}</div>
            <div className="menu">{renderedOptions}</div>
        </form>
    );
};

export default Dropdown;