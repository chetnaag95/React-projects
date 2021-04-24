import React from 'react';

const List = (props)=>{
    console.log(props);
    const { repos } = props;
    if(repos.length===0){
        return <p>No data availabel</p>
    }
    return(<ul>{ repos.map((repos)=><li>{repos.fullName}</li>) }</ul>)
}

export default List;