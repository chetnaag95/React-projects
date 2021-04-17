import React, { memo } from 'react';

const Child_B = ({ test  })=>{
    console.log("Child_B");
    return(
        <h1>Child B</h1>
    )
}

export default memo(Child_B);