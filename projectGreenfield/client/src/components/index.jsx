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
      userClicks: []
    }
    this.handleRelatedCard = this.handleRelatedCard.bind(this);
    this.userClick = this.userClick.bind(this);
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

  handleRelatedCard(e) {
    this.setState({
      prodId: Number(e.info.id)
    })
  }

  render(){
    return(
      <div>
        {/* {console.log('---', this.state.prodId)} */}
        <Home prodId={this.state.prodId} userClick={this.userClick}/>
        <Related handleRelatedCard={this.handleRelatedCard}/>
        <Outfit />
        <Reviews />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
