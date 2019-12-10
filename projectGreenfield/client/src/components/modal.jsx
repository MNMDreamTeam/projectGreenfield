import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyViewed: '',
      relatedItem: '',
      comparedItems: [],
      isLoading: true
    }
    this.dirtyWork = this.dirtyWork.bind(this)
  }

  componentDidMount() {
    let current = fetch(`http://3.134.102.30/products/${this.props.currentView}`).then(res => res.json());
    let compare = fetch(`http://3.134.102.30/products/${this.props.relatedId}`).then(res => res.json());

    Promise.all([current, compare])
      .then((data) => {
        let compared = this.dirtyWork(data)
        Promise.all([compared])
          .then((details) => {
            this.setState({
              currentlyViewed: data[0].name,
              relatedItem: data[1].name,
              comparedItems: [...details[0]],
              isLoading: false
            })
          })
      })
  }

  dirtyWork(prodArray) {
    let stringsArr = [];
    let characteristcsArr = [];

    // Yeah, so...., this is terrible and I WILL refactor it
    prodArray.forEach((el, i) => {
      el.features.forEach(character => {
        let str = (character.value !== 'null') ? `${character.value} ${character.feature}` : `${character.feature}`
        if (!stringsArr.includes(str)) {
          stringsArr.push(str);
          if (i === 0) {
            characteristcsArr.push([1, str, 0]);
          } else {
            characteristcsArr.push([0, str, 1]);
          }
        } else {
          characteristcsArr[stringsArr.indexOf(str)][2] = 1;
        }
      })
    })
    return characteristcsArr;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <div data-toggle="collapse" data-target="#modal" onClick={this.props.modalClose}>
          <div className="modal show fade" id="modal" tabIndex="-1" role="dialog" data-show="true" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="modalTitle">Comparing</h4>
                  <button type="button" className="close" data-dismiss="modal" onClick={this.props.modalClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container p-3">
                    <div className="row">
                      <div className="col-sm text-left">
                        <b>{this.state.currentlyViewed}</b>
                      </div>
                      <div className="col-sm text-right">
                        <b>{this.state.relatedItem}</b>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    {this.state.comparedItems.map((el, i) =>
                      <div className="row border-bottom" key={i}>
                        <div className="col-sm text-left">
                          {el[0] > 0 &&
                            <small><b>&#10004;</b></small>
                          }
                      </div>
                        <div className="col-sm text-center">
                          <small><em>{el[1]}</em></small>
                        </div>
                        <div className="col-sm text-right">
                          {el[2] > 0 &&
                            <small><b>&#10004;</b></small>
                          }
                      </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Modal;