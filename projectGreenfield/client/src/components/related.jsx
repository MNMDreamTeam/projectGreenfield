/*
  Base card structure built -

  Next steps:
  1. Conditional for sale price if there is one
  2. Action Button
  3. Need a carousel to display each card with horizontal scrolling
  4. TODO: Will need to get the currently viewed item product id when overview module is available.
*/



import React from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';


class Related extends React.Component {
  constructor() {
    super();
    this.state = {
      relatedProducts: [],
      isLoading: true
    }
    this.calcRating = this.calcRating.bind(this);
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
      return (prod / div);
    }
    return 0;
  }

  componentDidMount() {

    let tempProductsArr = [];
    fetch('http://3.134.102.30/products/3/related')
      .then(res => res.json())
      .then((relatedIds) => {
        relatedIds.forEach(el => {
          let styles = fetch(`http://3.134.102.30/products/${el}/styles`).then(res => res.json());
          let prods = fetch(`http://3.134.102.30/products/${el}`).then(res => res.json());
          let ratings = fetch(`http://3.134.102.30/reviews/${el}/meta`).then(res => res.json());

          let all = {};

          Promise.all([styles, prods, ratings])
            .then((data) => {
              // Style info -> 
              all.id = data[0].product_id;
              all.price = data[0].results[0].original_price;
              all.salePrice = data[0].results[0].sale_price;
              all.pic = data[0].results[0].photos[0].thumbnail_url;

              // Product info -> 
              all.name = data[1].name;
              all.cat = data[1].category;

              // Rating info -> 
              all.rating = this.calcRating(data[2].ratings);

              tempProductsArr.push(all);
            }).then((stuff) => {
              if (tempProductsArr.length === relatedIds.length) {
                this.setState({ relatedProducts: [...tempProductsArr], isLoading: false });
              }
            })
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h6>Lodaing....</h6>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
              <div className="card-group">
                {this.state.relatedProducts.map(el =>
                  <div className="row" key={el.id}>
                    <div className="col-sm-4">
                      <div className="card" style={{ width: 14 + 'rem' , height: 31 + 'rem'}}>
                        <img src={el.pic} className="card-img-top" style={{ height: 17 + 'rem' }}></img>
                        <div className="card-body flex-fill">
                          <p className="card-subtitle mb-2 text-muted border-bottom text-right"><small><em>{el.cat}</em></small></p>
                          <p className="card-text text-left"><b>{el.name}</b></p>
                          <p className="card-text text-left"><small>${el.price}</small></p>
                          <StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={el.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
      )
    }
  }
}

export default Related;
