
import React, { Fragment, useState, memo } from 'react';
import Search from './Search';

let k = ()=>{
    return (
        <header style={{width: 800, margin: 'auto', paddingBottom: 20}}>
            <Search/>
        </header>
    )
}


export default memo(k)