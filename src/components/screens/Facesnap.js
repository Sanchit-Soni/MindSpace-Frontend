import React, { useState } from "react";
import { Button } from "@material-ui/core";
const Facesnap = () => {
  const [image, setImage] = useState([]);
  const [sentImage, setSentImage] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [switcher, setSwitcher] = useState(true);
  const [showUpload, setShowUpload] = useState(true);

  const showImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
      setImage(reader.result);
      setSentImage(reader.result);
      // console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handlePost = (e) => {
    e.preventDefault();
    let idCardBase64 = "";
    getBase64(image, (result) => {
      idCardBase64 = result;
      console.log(idCardBase64);
      setImage(idCardBase64);
      setSentImage(idCardBase64);
      console.log(sentImage);
    });
    setShowUpload(false);
    console.log(image);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setImage([]);
    setPreviewImage([]);
    setSwitcher(true);
    setShowUpload(true);
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
              // <img
              //   src="https://image.freepik.com/free-vector/woman-taking-selfie-photo-smartphone_116089-19.jpg"
              //   className="image-prev"
              // />
              <h1>Please Upload your image</h1>
            )}
          </div>
          <center>
            <div className="btn-container">
              {showUpload && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePost}
                  className="form-btn"
                  disabled={switcher}
                >
                  Read My Face
                </Button>
              )}

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
