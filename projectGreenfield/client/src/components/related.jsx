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
  constructor() {
    super();
    this.state = {
      relatedProducts: []
    }
  }


  render() {
    return (
      <div class="card-group">
        <div class="row">

          <div class="col-sm-6">
            <div class="card" style={{ width: 10 + 'rem' }}>
              <img src="/296508_116_41.jpeg" class="card-img-top"></img>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">category</h6>
                <h6 class="card-text">name</h6>
                <h6 class="card-text">price</h6>
                <h6 class="card-text">stars</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Related;