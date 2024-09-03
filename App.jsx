import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import "./styles.css";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageGallery onImageClick={openModal} />
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
