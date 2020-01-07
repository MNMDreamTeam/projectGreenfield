import React from 'react';
import RelatedCards from './relatedCards.jsx';
import ProductsCar from './productsCar.jsx';
import Modal from './modal.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedId: 1,
      relatedProducts: [],
      isLoading: true,
      showModal: { show: false, relatedId: 0 }
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
    fetch(`http://127.0.0.1:3000/products/${this.props.id}/related`)
      .then(res => res.json())
      .then((relatedIds) => {
        relatedIds.forEach(el => {
          let styles = fetch(`http://127.0.0.1:3000/products/${el}/styles`).then(res => res.json());
          let prods = fetch(`http://127.0.0.1:3000/products/${el}`).then(res => res.json());
          let ratings = fetch(`http://127.0.0.1:3000/reviews/${el}/meta`).then(res => res.json());

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

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ displayedId: this.props.id });
      this.componentDidMount();
    }
  }

  modalClick(e) {
    this.setState({
      showModal: {
        show: true,
        relatedId: e.info.id
      }
    });
  }

  modalClose() {
    this.setState({
      showModal: {
        show: false
      }
    });
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
          {this.state.showModal.show ? <Modal currentView={this.state.displayedId} relatedId={this.state.showModal.relatedId} modalClose={this.modalClose} /> : null}
          <div className="container">
              <ProductsCar from={1} prods={this.state.relatedProducts} modalClick={this.modalClick} handleRelatedCard={this.props.handleRelatedCard} />
          </div>
        </div>
      )
    }
  }
}

export default Related;
