import { useState, useEffect } from "react";
import home20 from "../assets/home-2.0.jpg";
import home21 from "../assets/home-2.1.jpg";
import home22 from "../assets/home-2.2.jpg";
import home23 from "../assets/home-2.3.jpg";
import home24 from "../assets/home-2.4.jpg";
import home25 from "../assets/home-2.5.jpg";
import home26 from "../assets/home-2.6.jpg";
import home27 from "../assets/home-2.7.jpg";

export default function ImageSlider() {
  const images = [
    home20,
    home21,
    home22,
    home23,
    home24,
    home25,
    home26,
    home27,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-auto flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
      >
        {"<"}
      </button>

      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
      >
        {">"}
      </button>
    </div>
  );
}
