/*
  Base card structure built -
  TODO: Figure how to store all the stuff you need for the card --

    Pic - /styles/products/:id/styles
    Category - /products/:id
    Name - /products/:id
    Price - /products/:id/styles -- if on sale show red price
    Rating - /reviews/:id/meta

    Looks like 3 api calls to me...then store in something that will eventually become state.

  TODO: Some more styling to make it look super awesome.

  Next steps:
  1. Need a carousel to display each card with horizontal scrolling
  2. Dynamically load data...Use hardcoded product id to populate related products from API...TODO: Will need to get the currently viewed item product id when overview module is available.
  3. Stars
*/



import React from 'react';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
      // add isLoading bool?
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
      .then((res) => {
        return res.json();
      }).then((relatedIds) => {
        // console.log('---', relatedIds);
          relatedIds.forEach(el => {
            let tempObj = {};
            fetch(`http://3.134.102.30/products/${el}/styles`).then(res => res.json())
              .then(styles => {
                // console.log('---', styles.results[0].photos[0].thumbnail_url);
                tempObj.id = styles.product_id;
                tempObj.price = styles.results[0].original_price;
                tempObj.salePrice = styles.results[0].sale_price;
                tempObj.pic = styles.results[0].photos[0].thumbnail_url;
              }).then(next => {
                fetch(`http://3.134.102.30/products/${el}`).then(res => res.json())
                  .then(prods => {
                    // console.log('---', prods);
                    tempObj.name = prods.name;
                    tempObj.cat = prods.category;
                  })
              }).then(next => {
                fetch(`http://3.134.102.30/reviews/${el}/meta`).then(res => res.json())
                .then(rating => {
                  // console.log('---', rating);
                  tempObj.ratings = this.calcRating(rating.ratings);
                })
              })
              tempProductsArr.push(tempObj);
          })
      }).then(last => {
        // set state here
        console.log('---', tempProductsArr);
      })
  }

  render() {
    // console.log('related --- ', this.state.relatedProducts);
    return (
      <div className="container">
        <div className="row">
          <div id="relatedProdCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="card-group">

                  <div className="row">

                    <div className="col-sm-4">
                      <div className="card" style={{ width: 10 + 'rem' }}>
                        <img src="/296508_116_41.jpeg" className="card-img-top"></img>
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">category</h6>
                          <h6 className="card-text">name</h6>
                          <h6 className="card-text">default_price</h6>
                          <h6 className="card-text">stars</h6>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Related;


/*
  OLD STUFF -

  fetch('http://3.134.102.30/products/2/related')
      .then((res) => {
        return res.json();
      }).then((relatedId) => {
        // console.log('related', relatedId);
        relatedId.forEach(el => {
          fetch(`http://3.134.102.30/products/${el}/styles`)
            .then((item) => {
              return item.json();
            }).then((itemObj) => {
              // console.log(itemObj);
              // this.setState({relatedProducts: this.state.relatedProducts.concat(itemObj)}); // Yeah, this doesn't seem right....
              tempProductsArr.push(itemObj);
            });
        });
      }).then(() => {
        // console.log('--', tempProductsArr);
        this.setState({ relatedProducts: tempProductsArr });
      });


      ************************************


    fetch('http://3.134.102.30/products/2/related')
    .then((res) => {
      return res.json();
    }).then((related) => {
      // console.log('---', related);
      Promise.all(
        related.map(
          el => fetch(`http://3.134.102.30/products/${el}/styles`)
          .then(res => res.json())
        )
      ).then(styles => {
        // console.log('---', styles);
        styles.forEach(el => {
          tempProductsArr.push(el.results[0]);
        })
        // Set state here i think?
        console.log('---', tempProductsArr);
        this.setState({relatedProducts: tempProductsArr});
      })
    })
  }
*/