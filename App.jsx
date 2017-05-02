import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';


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
        <div className="face-compare container">
          <h2>H2</h2>
          <p>Instructions</p>
          <div className="compare-container">
            <div className="first compare">
              <div className="compare-box">
                <div className="img-box img-box-one">
                </div>
                <div className="search-box">
                </div>
              </div>
            </div>
            <div className="compare">
              <div className="compare-box">
                <div className="img-box">
                </div>
                <div className="search-box">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))