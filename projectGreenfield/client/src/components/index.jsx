import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import Carousel from './carousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Carousel />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
