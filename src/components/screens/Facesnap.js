import React, { useState } from "react";
import { Button } from "@material-ui/core";
const Facesnap = () => {
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [switcher, setSwitcher] = useState(true);

  const showImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };
  const handlePost = (e) => {
    e.preventDefault();

    console.log(image);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setImage([]);
    setPreviewImage([]);
    setSwitcher(true);
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    showImage(file);
    setImage(file);
    console.log(file);
    setSwitcher(false);
  };

  return (
    <>
      <div className="container">
        <h1>FaceSnap</h1>
        <h3>Let your face speak what your mind can't</h3>

        <form>
          <center>
            {switcher && (
              <div className="upload-div">
                <div>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    // multiple
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      fullWidth
                    >
                      Upload Your Photo
                    </Button>
                  </label>
                </div>
              </div>
            )}
          </center>

          {/* Only show first image, for now. */}
          <div className="up-image-container">
            {previewImage ? (
              <img src={previewImage} className="image-upload" />
            ) : (
              "Please Upload your Image!"
            )}
          </div>
          <center>
            <div className="btn-container">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePost}
                className="form-btn"
              >
                Read My Face
              </Button>
              <Button
                className="left-btn"
                variant="contained"
                color="primary"
                onClick={handleReset}
                className="form-btn"
              >
                Reset
              </Button>
            </div>
          </center>
        </form>
      </div>
    </>
  );
};

export default Facesnap;
