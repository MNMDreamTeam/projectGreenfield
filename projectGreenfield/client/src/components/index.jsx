import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Modal from './modal.jsx'
import Home from './home.jsx'
=======

>>>>>>> 59df77802ee057c0869b5045853463081bf02990


// import Reviews from './reviews.jsx';
import Home from './home.jsx';

import Related from './related.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
<<<<<<< HEAD
       <Home/>
=======
        <Home />
        <Related />
        {/* <Reviews /> */}
>>>>>>> 59df77802ee057c0869b5045853463081bf02990
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
