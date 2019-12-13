import React from 'react';
import RelatedCards from './relatedCards.jsx';

class ProductsCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from,
      currentId: 0
    }
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  prevClick(e) {
    let curr = this.state.currentId - 1;
    document.getElementById(curr).className = "item active p-1";
    document.getElementById(this.state.currentId).className = "item";
    this.setState({ currentId: curr });
  }

  nextClick() {
    let curr = this.state.currentId + 1;
    document.getElementById(curr).className = "item active p-1";
    document.getElementById(this.state.currentId).className = "item";
    this.setState({ currentId: curr });
  }

  render() {
    return (
      <div>
        <div id="cards" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="card-group d-flex flex-nowrap overflow-auto">
              {this.props.prods.map((el, i) =>
                <div id={i} className="item">
                  {this.state.from === 1 &&
                    <RelatedCards info={el} key={el.id} modalClick={this.props.modalClick} handleRelatedCard={this.props.handleRelatedCard} />
                  }
                  {/* {this.state.from === 2 && } */}
                </div>
              )}
            </div>
          </div>
          <a className="carousel-control-prev" role="button" data-slide="prev" onClick={this.prevClick}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#cards" role="button" data-slide="next" onClick={this.nextClick}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    )
  }
}

export default ProductsCar;