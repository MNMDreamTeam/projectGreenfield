import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './modal.jsx'






// import Reviews from './reviews.jsx';
import Home from './home.jsx';
import Related from './related.jsx';
import Outfit from './outfit.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Home />
        <Related />
        <Outfit />
        {/* <Reviews /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
