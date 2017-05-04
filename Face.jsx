import React from 'react';

export default (props) => {
 console.log('props', props)
  var imagePreviewUrl = props.url;
  var $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    $imagePreview = (<div className="previewText">Upload a picture to find your Celebrity Look-a-like</div>);
  }

  return (
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
              <form onSubmit={(e)=> props._handleSubmit(e)}>
                <input className="fileInput" type="file" onChange={(e)=> props._handleImageChange(e)} />
                <button className="submitButton" type="submit" onClick={(e)=> props._handleSubmit(e)}>Find my Look-a-like</button>
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
  )
  
}

            
