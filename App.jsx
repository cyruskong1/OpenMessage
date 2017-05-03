import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
// import Face from './Face.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init:null,
      file: '',
      imagePreviewUrl: ''
    }
  }

   _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file:file,
        imagePreviewUrl:reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  detectFace() {
    var url = 'https://api-us.faceplusplus.com/facepp/v3/detect';
    var apiKey = '-cyUOFeVxeP7pedQjuIEqLI2N_ZZ7-QK';
    var apiSecret = 'qV0_6Tatzvsuzof8kV7AUYXScdiWecnN';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        success: function() { alert('hello!') },
        error: function(error) { console.log('error', error) },
        beforeSend: setHeader
      });

      function setHeader(xhr) {
        xhr.setRequestHeader('securityCode', apiSecret);
      }
  }

  compareFace() {

  }


  render () {

    var {imagePreviewUrl} = this.state;
    var $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Upload a picture to find your Celebrity Look-a-like</div>);
    }

    return (
      <div>
        <div>
        <Header />
        </div>
        <div className="face-compare container">
          <h2>H2</h2>
          <p>Instructions</p>
          <div className="compare-container">
            <div className="first compare">
              <div className="compare-box">
                <div id="img-box-one" className="img-box imgPreview">
                  {$imagePreview}
                </div>
                <div className="previewComponent">
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Find my Look-a-like</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="compare">
              <div className="compare-box">
                <div className="img-box imgResult">
                </div>
                <div className="resultComponent">
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