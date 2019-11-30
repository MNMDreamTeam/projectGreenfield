import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal.jsx';
import Related from './related.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Related />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
