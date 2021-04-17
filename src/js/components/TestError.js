import React from 'react';

export default ({test})=>{
     if(test=="value_3"){
         throw new Error("New Error Values");
     }else{
         return(
             <h1>{test}</h1>
         )
     }
}