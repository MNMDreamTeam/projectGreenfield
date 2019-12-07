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
    this.closeModal = this.closeModal.bind(this);
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

  closeModal() {

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
        <div data-toggle="collapse" data-target="#modal" onClick={this.closeModal}>
          <div className="modal show fade" id="modal" tabIndex="-1" role="dialog" data-show="true" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="modalTitle">Comparing</h4>
                  <button type="button" className="close" data-dismiss="modal" onClick={this.closeModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm text-left">
                        {this.state.currentlyViewed}
                      </div>
                      <div className="col-sm text-right">
                        {this.state.relatedItem}
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    {this.state.comparedItems.map(el =>
                      <div className="row border-bottom">
                        <div className="col-sm text-left">
                          {el[0] > 0 && 
                            <b>&#10004;</b>
                          }
                      </div>
                        <div className="col-sm text-center">
                          <em>{el[1]}</em>
                        </div>
                        <div className="col-sm text-right">
                          {el[2] > 0 && 
                            <b>&#10004;</b>
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