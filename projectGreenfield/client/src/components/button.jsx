import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<button type="button" class="btn btn-primary">click me bro</button>)
    }
}

export default Button;