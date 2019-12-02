import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form.jsx';
import Modal from './modal.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
