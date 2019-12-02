import React from 'react';
import ReactDOM from 'react-dom';



import Reviews from './reviews.jsx';
import Home from './home.jsx';

import Related from './related.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

        <Home />
        <Related />
        <Reviews />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
