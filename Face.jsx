import React from 'react';

export default (props) => (
  <div className="face-compare container">
    <h2>H2</h2>
    <p>Instructions</p>
    <div className="compare-container">
      <div className="first compare">
        <div className="compare-box">
          <div className="img-box img-box-one">
          </div>
          <div className="search-box">
            <label className="upload-img">
              <i className="icons icon-upload"></i>
              <span>Upload an Image</span>
              <input type="file" accept="image/png,image/jpeg" id="file-uploader" className="file-uploader-one"></input>
            </label>
            <input placeholder="Image URL" className="search-input search-input-one"></input>
            <button className="search-btn search-btn-one">Go</button>
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
)


            
