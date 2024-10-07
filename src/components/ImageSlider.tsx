import { useState } from "react";
import { images } from "../data/ImageSliderList";
import Button from "./Button";
import "../scss/Button.scss";

export default function ImageSlider() {
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
      <Button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
        className="left-0 tranform"
        varient="third"
        name="<"
      />
      <Button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="right-0 tranform"
        varient="third"
        name=">"
      />
    </div>
  );
}
