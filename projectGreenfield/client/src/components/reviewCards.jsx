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
                <b>{this.state.reviews.length} reviews sorted by relevance</b>
                {this.state.reviews.map(character => {
                    return (
                        <div className='card w-400'>
                            <div className='card-body reviewCard'>
                                <span className='reviewStars'>{this.state.reviews.length > 0 ? <StarRatings starDimension={'15px'} starSpacing={'10px'} 
                                    starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={this.state.reviews[0].rating}/> : 'loading'}
                                </span>
                                <span className='nameAndDate'>{this.state.reviews.length > 0 ? this.state.reviews[0].reviewer_name : 'loading'}&nbsp;&nbsp;&nbsp;
                                    {this.state.reviews.length > 0 ? this.state.reviews[0].date.substring(0, 10) : 'loading'}
                                </span>
                                <br></br>
                                <br></br>
                                <div className='reviewSummary'>
                                    <b>{this.state.reviews.length > 0 ? this.state.reviews[0].summary : 'loading'}</b>
                                </div>
                                <br></br>
                                <div className='reviewBody'>
                                    <small>{this.state.reviews.length > 0 ? this.state.reviews[0].body : 'loading'}</small>
                                </div>
                                <br></br>
                                <div className = 'Helpful-Report'>
                                    <small>Helpful? <u>Yes</u>({this.state.reviews.length > 0 ? this.state.reviews[0].recommend : 'loading'})  |  <u>Report</u></small>
                                </div>
                            </div>
                        </div>)
                    })}
                {console.log('state:', this.state.reviews)}
                {/* <Form /> */}
            </div>
        )
    }
}

export default ReviewCards;