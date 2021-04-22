

import React, { Fragment, useState } from 'react';
import SearchBar from "material-ui-search-bar";

export default ()=>{
    const [ searchKey, setSearchKey ] = useState('');

    const doSomethingWith = ()=>{

    }

    return (
        <Fragment>
            <SearchBar
                value={searchKey}
                onChange={(newValue) => setSearchKey(newValue)}
                onRequestSearch={() => doSomethingWith(searchKey)}
            />
        </Fragment>
    )
}