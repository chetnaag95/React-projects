import React from 'react';

export function withAuth(Component){
    return class AuthenticatedComponent extends React.Component{
        render(){
            console.log(this.props);
            return(
                <Component {...this.props}/>
            )
        }
    }
}


export function withAuth(Component){
    return class AuthenticatedComponent extends React.Component{
        render(){
            return <Component {...this.props}/>
        }
    }
}