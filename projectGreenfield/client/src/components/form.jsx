import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: ''
        };
    }
    
    render() {
        return (
            <form>
                <div>
                    <input type="radio" id="one star" name="drone" value="one star"></input>
                    <label for="one star"> 1 Star Review - Poor</label>
                </div>
            </form>
        )
    }
}

export default Form;