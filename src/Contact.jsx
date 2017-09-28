import React, { Component } from 'react';

export class Contact extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.contactName}</h3>
                <p>{this.props.contactEmail}</p>
                <p>{this.props.contactPhone}</p>
            </div>
        )
    }
}
