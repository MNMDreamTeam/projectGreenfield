/*
  Base card structure built -

  TODO: Some more styling to make it look super awesome.

  Next steps:
  1. Need a carousel to display each card with horizontal scrolling
  2. TODO: Will need to get the currently viewed item product id when overview module is available.
  3. Stars
*/



import React from 'react';

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
      return prod / div;
    }

    return 0;
  }

  componentDidMount() {

    let tempProductsArr = [];
    fetch('http://3.134.102.30/products/2/related')
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
        <div>
          <div className="card-group">
          {this.state.relatedProducts.map(el =>
              <div className="row" key={el.id}>
                <div className="col-sm-4">
                  <div className="card" style={{ width: 10 + 'rem' }}>
                    <img src={el.pic} className="card-img-top"></img>
                    <div className="card-body">
                      <h6 className="card-subtitle mb-2 text-muted">{el.cat}</h6>
                      <h6 className="card-text">{el.name}</h6>
                      <h6 className="card-text">{el.price}</h6>
                      <h6 className="card-text">{el.rating}</h6>
                    </div>
                  </div>
                </div>
                </div>
          )}
           </div>
        </div>
      )
    }
  }
}

export default Related;
