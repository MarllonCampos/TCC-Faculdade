import React, {useState} from 'react';
import useDebounce from './useDebounce';
import Header from '../../components/Header';

const SearchInput = ({value, onChange}) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 250);

    function handleChange(event){
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <input
        type="search"
        value={displayValue}
        onChange={handleChange}
        />
    );
};
export default SearchInput;