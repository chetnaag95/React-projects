import React from 'react';

function WithLoading(Component){
    return function WithLoadingComponent({ isLoading, ...props }){
        if(!isLoading) return <Component {...props}/>
        return <p>Hold on, fetching data from the server</p>
    }
}

export default WithLoading;