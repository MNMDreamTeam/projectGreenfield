import React from 'react';

class Thumbnail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allPics: this.props.stylepics
        }
       
    }

    render(){
        return (
<div>
{this.state.allPics.map(item => (
        <div class="Row2">
            <img class="rightSide2" src={item}></img>
        </div>
))}
</div>
        )
    }
}

export default Thumbnail;