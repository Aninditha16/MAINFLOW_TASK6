import React from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/landscape1.jpg";
import img5 from "./Images/fertilizer.jpg";
import img6 from "./Images/landscape2.jpg";
import img7 from "./Images/landscape3.jpg";
import img8 from "./Images/landscape4.jpeg";
import img9 from "./Images/landscape5.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const ImageGallery = ({ onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index}`}
          onClick={() => onImageClick(image)}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
