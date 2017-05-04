import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
// import Face from './Face.jsx';
import $ from 'jquery';
import parse from 'curl-to-fetch';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      init:null,
      file: '',
      imagePreviewUrl: ''
    }
  }

  componentDidUpdate () {
    console.log('face uploaded, detecting face')
    this.detectFace();
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

  //create Cors Request for use with XMLHTTP request, for now using Fetch
  createCorsRequest (method, url, key, secret, file) {
    var xhr = new XMLHttpRequest();

      if ("withCredentials" in xhr) {
        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('api_key', key);
        xhr.setRequestHeader('api_secret', secret);
        xhr.setRequestHeader('image_file', file)
      } else {
        // Otherwise, CORS is not supported by the browser.
        xhr = null;
      }
      return xhr;
  }

  detectFace() {
    var url = 'https://api-us.faceplusplus.com/facepp/v3/detect';
    var apiKey = '-cyUOFeVxeP7pedQjuIEqLI2N_ZZ7-QK';
    var apiSecret = 'qV0_6Tatzvsuzof8kV7AUYXScdiWecnN';
    var faceToken = '';
    console.log('this was uploaded', this.state.file)

    //XMLHTTP Request
    // var xhr = this.createCorsRequest('POST', url, apiKey, apiSecret, this.state.file);
      
    // if (!xhr) {
    //   console.log('CORS not supported');
    // }

    // xhr.setRequestHeader('api_key', apiKey)
    // console.log('xhr header set', xhr)

    // xhr.onload = function() {
    //   var text = xhr.responseText;
    //   console.log('Response from CORS request to ' + url);
    //   console.log(text);
    // };

    // xhr.onerror = function() {
    //   console.log('Woops, there was an error making the request.');
    // };

    // xhr.send();
    
    // AJAX CALL
    // $.ajax({
    //   url: url,
    //   type: 'POST',
    //   headers: {'api_secret': apiSecret, 'api_key': apiKey},
    //   image_file: this.state.file,
    //   dataType: 'jsonp',
    //   success: function() { alert('hello!') },
    //   error: function(error) { console.log('error', error) },
    // });
    

    // FETCH CALL
    fetch( 
      'https://api-us.faceplusplus.com/facepp/v3/detect', 
      {headers:{
        api_key: apiKey,
        api_secret: apiSecret,
        image_file: this.state.file, 
        },
      method:'POST',
      dataType:'json'
      }
     )
     .then(function(response) {
        //get the image data 
        //response.faces is an array of face data
        console.log('response to detection', response)
        return response.faces;
      })
     .then(function(faceArray) {
        //take data from the faces array and find the face token
        console.log('face Array', faceArray);
        faceArray.filter(function(element) {
          return element === 'face_token';
        });
      })
     .then(function(faceTokenCode) {
        //set the faceToken equal to the face token code from detect face call
        faceToken = faceTokenCode;
        return faceToken;
     })
     .catch(function(error) {
        //catch the errors
        console.log('error', error)
       });
    
  }

    searchForMatchingFace () {
    console.log('searching for face');
  }

  compareFace(data) {
    
    fetch( 
      'https://api-us.faceplusplus.com/facepp/v3/detect', 
      {headers:{
        api_key: apiKey,
        api_secret: apiSecret,
        image_file: data,
        image_file2: 
        },
      method:'POST',
      dataType:'json'
      }
     )
     .then(function(response) {
        console.log('response to compare', response);
        return response.confidence;
      })
     .then(function(data) {
        console.log('data', data)
      })
     .catch(function(error) {console.log('error', error)
       });
    
  }

  clearSearch() {
    
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

        <Header />
 
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
                    <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)} onClick={() => this.searchForMatchingFace()}>Find my Look-a-like</button>
                    <button className="clear">Undo</button>
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