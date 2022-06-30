import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//API KEY AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <input type="text" value={text}
                   onChange={(e) => setText(e.target.value)}/>
            <Dropdown label="Select a Language"
                      selected={language} onSelectedChange={setLanguage} options={options}/>
            <hr />
            <h3 className="header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
}

export default Translate;