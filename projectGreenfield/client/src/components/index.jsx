import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.jsx'
import Home from './home.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Home/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
