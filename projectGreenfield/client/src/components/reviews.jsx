import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';
import StarRatings from '../../../react-star-ratings';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRatings: null,
            percentOfRecommended: null,
            ratingsBreakdown: {}
        };
    }

    calcRating(ratings) {
        // Used to calculate the average star rating based on user ratings 1-5
        if (Object.keys(ratings).length > 0) {
          let div = 0;
          let prod = 0;
          for (let key in ratings) {
            div += ratings[key];
            prod += Number(key) * ratings[key];
          }
          return Math.round((prod / div) * 10) / 10;
        }
        return 0;
      }

    calcPercent(obj) {
        if (obj.hasOwnProperty(1) && obj.hasOwnProperty(0)){
            let total = obj[1] + obj[0];
            let perc = (obj[1] / total) * 100;
            return perc + '% of reviews recommend';
        }else if (!obj.hasOwnProperty(1)){
            return '100% of reviews did not recommend';
        }else if (!obj.hasOwnProperty(0)){
            return '100% of reviews recommend';
        }
    }

    checkRatingsBreakdown(obj) {
        
    }

    //in api recomended: {'0': 'no', '1': 'yes'}
    componentDidMount() {
        fetch(`http://3.134.102.30/reviews/5/meta`) // using this as a good base case
            .then(res => res.json())
            .then((data) => {
                let ratings = this.calcRating(data.ratings);
                let recommended = this.calcPercent(data.recommended);
                this.setState({totalRatings: ratings, percentOfRecommended: recommended, ratingsBreakdown: data.ratings})
            })
    }

    render() {
        return (
            <div className='container'>
                <h4><em><u>Ratings and Reviews</u></em></h4>
                <h1>{this.state.totalRatings} {this.state.totalRatings ? (<StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={this.state.totalRatings} />) : 'loading'}</h1>
                <large>{this.state.percentOfRecommended} this product</large>

                <Form />
            </div>
        )
    }
}

// test for git
export default Reviews;