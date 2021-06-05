import React from 'react';
import Loading from './Loading';

export default function WithLoading(Component){
    return function WithLoadingComponent({isLoading, ...props}){
        // if(!isLoading) return <Component {...props}/>;
        return <Loading/>
    }
}

