import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import Carousel from './carousel.jsx'
import VerticalCarousel from './VerticalCarousel.jsx'
import Home from './home.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
