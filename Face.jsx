import React from 'react';

export default class Face extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      file: '',
      imagePreviewUrl: '',
    }
  }



  render (props) {

    var {imagePreviewUrl} = this.state;
    var $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }


   return (
     <div className="face-compare container">
      <h2>H2</h2>
      <p>Instructions</p>
      <div className="compare-container">
        <div className="first compare">
          <div className="compare-box">
            <div id="img-box-one" className="img-box">
              {$imagePreview}
            </div>
            <form onSubmit={this.props._handleSubmit(e)} className="search-box">
              <label className="upload-img">
                <i className="icons icon-upload"></i>
                <input onChange={this.props.showUploadedFiles(e)} type="file" accept="image/png,image/jpeg" id="file-uploader" className="file-uploader-one"></input>
              </label>
              <input placeholder="Image URL" className="search-input search-input-one" ></input>
              <button className="search-btn search-btn-one">Go</button>
            </form>
          </div>
        </div>
        <div className="compare">
          <div className="compare-box">
            <div className="img-box">
            </div>
            <div className="search-box">
              <label className="upload-img">
                <i className="icons icon-upload"></i>
                <input type="file" accept="image/png,image/jpeg" id="file-uploader" className="file-uploader-one"></input>
              </label>
              <input placeholder="Image URL" className="search-input search-input-one"></input>
              <button className="search-btn search-btn-one">Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}


            
