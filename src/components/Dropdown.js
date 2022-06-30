import React, {useState, useEffect, useRef} from 'react';

const hidden = {
    display: 'none'
}

const visible = {
    display: 'inherit'
}


const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=> {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
            console.log('click!!');
        };

        window.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            window.removeEventListener('click', onBodyClick);
        };

    }, []);

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
    });

    return (
        <div ref={ref} className="dropdown-container">
            <form action="" onClick={() => setOpen(!open)}>
                <label htmlFor="" >{label}</label>
                <div className='item' >{selected.label}</div>
                <div className="menu color-options" style={open ? visible : hidden}>{renderedOptions}</div>
            </form>
        </div>
    );
};

export default Dropdown;