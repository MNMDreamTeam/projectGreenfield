/*
  Base card structure built -

  Next steps:
  1. Conditional for sale price if there is one
  2. Action Button
  3. Need a carousel to display each card with horizontal scrolling
  4. TODO: Will need to get the currently viewed item product id when overview module is available.
*/



import React from 'react';
import RelatedCards from './relatedCards.jsx';
import Modal from './modal.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedId: 89,
      relatedProducts: [],
      isLoading: true,
      showModal: {show: false, relatedId: 0}
    }
    this.calcRating = this.calcRating.bind(this);
    this.modalClick = this.modalClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
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
    fetch(`http://3.134.102.30/products/${this.state.displayedId}/related`)
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

  modalClick(e) {
    this.setState({showModal: {
      show:true,
      relatedId: e.info.id
    }});
  }

  modalClose() {
    this.setState({showModal: {
      show: false
    }});
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
        // Related Products
          <div className="container">
            <h4><em><u>Related Products:</u></em></h4>
            {this.state.showModal.show ? <Modal currentView={this.state.displayedId} relatedId={this.state.showModal.relatedId} modalClose={this.modalClose}/> : null}
            <div className="row">
              <div className="container-fluid">
                <div id="relatedCar" className="carousel slide carousel-multi-item v-2" data-ride="carousel"> {/*style={{ width: 43 + 'rem' }} */}
                  <div className="carousel-inner v-2" role="listbox">
                    <div className="card-group d-flex flex-nowrap">
                      {this.state.relatedProducts.map(el =>
                        // <div className="carousel-item">
                        <RelatedCards info={el} key={el.id} modalClick={this.modalClick} handleRelatedCard={this.props.handleRelatedCard}/>
                        // </div>
                      )}
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#relatedCar" data-slider="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#relatedCar" data-slider="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }
}

export default Related;
