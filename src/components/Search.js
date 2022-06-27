import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId)
        };

    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm])


    const renderedResults = results.map((results) => {
        return (
            <div className="item search-item" key={results.pageid}>
                <div className="header">
                    <h2>{results.title}</h2>
                </div>
                <a href={`https://en.wikipedia.org?curid=${results.pageid}`} className="button">Go</a>
                <div className="summary">
                    <span dangerouslySetInnerHTML={{ __html: results.snippet}}></span>
                </div>

            </div>
        );
    })

    return (
        <div>
            <form action="">
                <label htmlFor="search">Enter Search Term</label>
                <input type="text" id="search" className="input"
                value={term}
                onChange={e => setTerm(e.target.value)}/>
            </form>
            <div className="list">{renderedResults}</div>
        </div>
    );
}

export default Search;