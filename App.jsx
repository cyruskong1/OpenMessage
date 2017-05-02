import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Face from './Face.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init:null
    }
  }



  render () {
    return (
      <div>
        <Header />
        <Face />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))