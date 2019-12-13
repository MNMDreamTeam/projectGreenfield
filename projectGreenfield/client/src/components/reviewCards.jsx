import React from 'react';
import ReactDOM from 'react-dom';

class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        fetch(`http://3.134.102.30/reviews/5/list`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    render() {
        return (
            <p>test</p>
        )
    }
}

export default ReviewCards;