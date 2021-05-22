import React from 'react';
import { Link } from 'react-router-dom';


const List = (props)=>{
    console.log(props);
    const { repos } = props;
    if(repos.length===0){
        return <p>No data availabel</p>
    }
    return(<ul>{ repos.map((repos)=><li><Link to="/test">{repos.fullName}</Link></li>) }</ul>)
}

export default List;