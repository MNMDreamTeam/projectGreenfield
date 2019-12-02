/*
  Base card structure built -
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
  }

  componentDidMount() {
    var temp = [];

    // let data = fetch('http://3.134.102.30/products/2/related')
    // .then((res) => {
    //   return res.json();
    // }).then((relatedId) => {
    //   // console.log('related', relatedId);
    //   relatedId.forEach(el => {
    //     fetch(`http://3.134.102.30/products/${el}`)
    //     .then((item) => {
    //       return item.json();
    //     }).then((itemObj) => {
    //       // setState here? -- concat to array? is that legal for state? ask Teddi
    //       // console.log(itemObj);
    //       // this.setState({relatedProducts: this.state.relatedProducts.concat(itemObj)}); // Yeah, this doesn't seem right....
    //       temp.push(itemObj);
    //     });
    //   });
    // });

    Promise.all([data]).then(() => {
      console.log(temp);
    })
  }

  render() {
    console.log(this.state);
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