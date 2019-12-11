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
      prodId: 1,
      selectedStyle: {}
    }
    this.handleRelatedCard = this.handleRelatedCard.bind(this);
    this.handleStyles = this.handleStyles.bind(this);
  }

  handleStyles(e) {
    this.setState({selectedStyle: e});
  }

  handleRelatedCard(e) {
    this.setState({
      prodId: Number(e.info.id),
    })
  }

  render(){
    return(
      <div>
        <Home prodId={this.state.prodId} handleStyles={this.handleStyles}/>
        <Related handleRelatedCard={this.handleRelatedCard} id={this.state.prodId}/>
        <Outfit currentStyle ={this.state.selectedStyle} product={this.state.prodId}/>
        <Reviews />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
