import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';
import StarRatings from '../../../react-star-ratings';

class ReviewCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    componentDidMount() {
        fetch(`http://3.134.102.30/reviews/5/list?count=1000`)
            .then(res => res.json())
            .then((data) => {
                console.log('data', data);
                let reviewsArr = [];
                for (let i = 0; i < data.results.length; i++){
                    reviewsArr.push((data.results)[i]);
                    console.log('newArr:', reviewsArr);
                }
                this.setState({reviews: reviewsArr});
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.reviews.length} reviews sorted by relevance</p>
                <div className='card w-300'>
                    <span className='card-body'>
                        {this.state.reviews.length > 0 ? <StarRatings starDimension={'15px'} starSpacing={'10px'} 
                        starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={this.state.reviews[0].rating}/> : 'loading'}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {this.state.reviews.length > 0 ? this.state.reviews[0].reviewer_name : 'loading'}&nbsp;&nbsp;&nbsp;
                        {this.state.reviews.length > 0 ? this.state.reviews[0].date.substring(0, 10) : 'loading'}
                    </span>
                </div>
                {console.log('state:', this.state.reviews)}
                {/* <Form /> */}
            </div>
        )
    }
}

export default ReviewCards;