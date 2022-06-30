import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red',
    },
    {
        label: 'The color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    },
];

export default () => {


    return (
        <div>
            {/*<Accordion items={items}/>*/}
            {/*<Search/>*/}
            {/*<Dropdown   selected={selected}*/}
            {/*            onSelectedChange={setSelected}*/}
            {/*            options={options}/>*/}
            <Translate/>
        </div>
    );
};