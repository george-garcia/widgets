import React from 'react';
import { useState } from 'react';
import './Accordion.css'

const Accordion = ({items}) => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i);
    }

    const renderedItems = items.map((item, i) => {
        return (
            <div className="item" key={item.title}>
                <div className="title" onClick={() => toggle(i)}>
                    {item.title}
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    })

    return (
        <div className="accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;