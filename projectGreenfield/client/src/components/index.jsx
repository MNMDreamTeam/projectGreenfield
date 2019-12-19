import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.jsx'
import Reviews from './reviews.jsx';
import Home from './home.jsx';
import Related from './related.jsx';
import Outfit from './outfit.jsx';
import QnA from './QnA-components/QnA.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prodId: 1,
      userClicks: [],
      selectedStyle: {}
    }
    this.handleRelatedCard = this.handleRelatedCard.bind(this);
    this.userClick = this.userClick.bind(this);
    this.handleStyles = this.handleStyles.bind(this);
  }

  userClick(e){
    var click = {}
    click.target = e.target.className;
    click.module = e.target.id;
    var dt = new Date();
    var utcDate = dt.toUTCString();
    click.timeSamp = utcDate
    console.log('click', click);
    var arr = this.state.userClicks;
    arr.push(click);
    this.setState({
      userClicks: arr
    })
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
        <QnA />
        <Outfit currentStyle ={this.state.selectedStyle} product={this.state.prodId}/>
        <Reviews prodId={this.state.prodId}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
