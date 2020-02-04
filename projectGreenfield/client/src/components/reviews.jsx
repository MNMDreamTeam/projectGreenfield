import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from '../../../react-star-ratings';
import CharacteristicSlides from './characteristicSlides.jsx';
import ReviewCards from './reviewCards.jsx';

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRatings: null,
            percentOfRecommended: null,
            ratingsBreakdown: {},
            characteristics: {}
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
            let perc = Math.round((obj[1] / total) * 100);
            return perc + '% of reviews recommend';
        }if (!obj.hasOwnProperty(1) && obj.hasOwnProperty(0)){
            return '100% of reviews did not recommend';
        }if (!obj.hasOwnProperty(0) && obj.hasOwnProperty(1)){
            return '100% of reviews recommend';
        }if (!obj.hasOwnProperty(1) && !obj.hasOwnProperty(0)){
            return 'No reviews for';
        }
    }

    fillRatingsBreakdown(obj) {
        obj.max = 0;
        for(var key in obj){
            if (key !== 'max'){
            obj.max += obj[key];
            obj[key] = (obj[key] / obj.max) * 100;
            // console.log('all values in obj', obj[key], key)
            }
        }
        if (!obj[1]){
            obj[1] = 0;
        }if (!obj[2]){
            obj[2] = 0;
        }if (!obj[3]){
            obj[3] = 0;
        }if (!obj[4]){
            obj[4] = 0;
        }if (!obj[5]){
            obj[5] = 0;
        }
        return obj;
    }

    characteristicsArrCollapse(obj) {
        let arr = [];
        for (let key in obj){
            let characterObj = {};
            obj[key] = obj[key].value;
            characterObj[key] = obj[key];
            arr.push(characterObj);
        }
        return arr;
    }

    //in api recomended: {'0': 'no', '1': 'yes'}
    componentDidMount() {
        console.log('propsId:', this.props.prodId);
        fetch(`http://3.134.102.30/reviews/${this.props.prodId}/meta`)
            .then(res => res.json())
            .then((data) => {
                let ratings = this.calcRating(data.ratings);
                let recommended = this.calcPercent(data.recommended);
                let breakdown = this.fillRatingsBreakdown(data.ratings);
                let characteristics = this.characteristicsArrCollapse(data.characteristics);
                this.setState({totalRatings: ratings, percentOfRecommended: recommended, ratingsBreakdown: breakdown, 
                    characteristics: characteristics})
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.prodId !== this.props.prodId) {
           this.componentDidMount();
        }
      }

    render() {
        return (
            <div className='container'>
                <h4><em><u>Ratings and Reviews</u></em></h4>
                <div className='left-row-review'>
                    <div>
                        <h1>{this.state.totalRatings} {this.state.totalRatings ? (<StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={this.state.totalRatings} />) : 'Reviews'}</h1>
                        <small><small>{this.state.percentOfRecommended} this product</small></small>
                        <br></br>
                        <div class="progress" style={{width: 140 + 'px'}}>5 stars {this.state.ratingsBreakdown[5] ?
                            (<div class="progress-bar" style={{width: this.state.ratingsBreakdown[5], backgroundColor: '#707070'}} role="progressbar" aria-valuenow={this.state.ratingsBreakdown[5]} aria-valuemin="0" aria-valuemax="100" ></div>) : ''}
                        </div>
                        <div class="progress" style={{width: 140 + 'px'}}>4 stars {this.state.ratingsBreakdown[4] ?
                            (<div class="progress-bar" style={{width: this.state.ratingsBreakdown[4], backgroundColor: '#707070'}} role="progressbar" aria-valuenow={this.state.ratingsBreakdown[4]} aria-valuemin="0" aria-valuemax="100"></div>) : ''}
                        </div>
                        <div class="progress" style={{width: 140 + 'px'}}>3 stars {this.state.ratingsBreakdown[3] ?
                            (<div class="progress-bar" style={{width: this.state.ratingsBreakdown[3], backgroundColor: '#707070'}} role="progressbar" aria-valuenow={this.state.ratingsBreakdown[3]} aria-valuemin="0" aria-valuemax="100"></div>) : ''}
                        </div>
                        <div class="progress" style={{width: 140 + 'px'}}>2 stars {this.state.ratingsBreakdown[2] ?
                            (<div class="progress-bar" style={{width: this.state.ratingsBreakdown[2], backgroundColor: '#707070'}} role="progressbar" aria-valuenow={this.state.ratingsBreakdown[2]} aria-valuemin="0" aria-valuemax="100"></div>) : ''}
                        </div>
                        <div class="progress" style={{width: 140 + 'px'}}>1 star &nbsp;{this.state.ratingsBreakdown[1] ?
                            (<div class="progress-bar" style={{width: this.state.ratingsBreakdown[1], backgroundColor: '#707070'}} role="progressbar" aria-valuenow={this.state.ratingsBreakdown[1]} aria-valuemin="0" aria-valuemax="100"></div>) : ''}
                        </div>
                        {Array.isArray(this.state.characteristics) ? (<CharacteristicSlides characteristics={this.state.characteristics}/>) : 'loading'}
                    </div>
                    <div className='right-row-review'>
                        <ReviewCards prodId={this.props.prodId} key={this.state.percentOfRecommended}/>
                    </div>
                </div>
            </div>
        )
    }
}

// test for git
export default Reviews;