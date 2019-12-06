import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyViewed: [],
      relatedItem: []
    }
  }

  componentDidMount() {
    let current = fetch(`http://3.134.102.30/products/${this.props.currentView}`).then(res => res.json());
    let compare = fetch(`http://3.134.102.30/products/${this.props.relatedId}`).then(res => res.json());

    Promise.all([current, compare])
    .then((data) => {
      this.setState({
        currentlyViewed: [...data[0].features],
        relatedItem: [...data[1].features]
      })
    })
  }

  render() {
    return (
      <div>
        {console.log('---', this.state)}
      </div>
    )
  }
}

export default Modal;

{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">
          jkhsklajhdfgkajfgh
      </button> 
    
    <div className="modal" id="modal" tabIndex="-1" role="dialog" data-show="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">Alert Title Here</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>The alert text will go here......</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>*/}