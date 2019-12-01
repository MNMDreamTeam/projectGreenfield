import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import Carousel from './carousel.jsx'
import VerticalCarousel from './VerticalCarousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <VerticalCarousel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
