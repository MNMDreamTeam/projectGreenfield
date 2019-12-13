import React from 'react';
import RelatedCards from './relatedCards.jsx';

class ProductsCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from
    }
  }

  render() {
    return (
      <div>
        <div id="cards" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="card-group d-flex flex-nowrap overflow-auto">
              {this.props.prods.map(el =>
                <div className="carousel item">
                  {this.state.from === 1 &&
                    <RelatedCards info={el} key={el.id} modalClick={this.props.modalClick} handleRelatedCard={this.props.handleRelatedCard} />
                  }
                  {/* {this.state.from === 2 && } */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsCar;