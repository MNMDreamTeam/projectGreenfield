import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.jsx'
import Reviews from './reviews.jsx';
import Home from './home.jsx';
import Related from './related.jsx';
import Outfit from './outfit.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prodId: 1
    }
    this.handleRelatedCard = this.handleRelatedCard.bind(this);
  }


  handleRelatedCard(e) {
    this.setState({
      prodId: Number(e.info.id)
    })
  }

  render(){
    return(
      <div>
        {/* {console.log('---', this.state.prodId)} */}
        <Home prodId={this.state.prodId}/>
        <Related handleRelatedCard={this.handleRelatedCard}/>
        <Outfit />
        <Reviews />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
