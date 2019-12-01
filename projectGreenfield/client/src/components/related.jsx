/*
  Base card structure built -
  TODO: Some more styling to make it look super awesome.
  TODO: Do some brainstorming to figure out if this can be a functional component, or if it will actually need its own state???


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
  }

  componentDidMount() {
    /*
      Something like below -
      will need to get related products id's, then setState with matching products

      How to do the seperate calls -- Nested fetch maybe??
    */

    // fetch
      // .then - data.json
        // .then - fetch products list
          // .then - setState with related products

    fetch('http://3.134.102.30/products/2/related')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log('related', data);
      data.forEach(el => {
        fetch(`http://3.134.102.30/products/${el}`)
        .then((item) => {
          return item.json();
        }).then((itemObj) => {
          // setState?
          console.log(itemObj);
        })
      })
      // fetch('http://3.134.102.30/products/list')
      // .then((list) => {
      //   return list.json();
      // }).then((products) => {
      //   // data = array of related id's
      //   // products = array of product objects
      //   console.log('related', data);
      //   console.log('products', products);
      // })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="relatedProdCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item carousel-item active">

                <div className="row">

                  <div className="col-sm-4">
                    <div className="card" style={{ width: 10 + 'rem' }}>
                      <img src="/296508_116_41.jpeg" className="card-img-top"></img>
                      <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">category</h6>
                        <h6 className="card-text">name</h6>
                        <h6 className="card-text">price</h6>
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
    )
  }
}

export default Related;