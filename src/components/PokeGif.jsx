import React, { useState, useEffect } from "react";

const PokeGif = ({ gifLink, isHovered }) => {
  const [firstFrame, setFirstFrame] = useState(null);
  const [fullGif, setFullGif] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // To handle CORS issues
    img.src = gifLink;
    img.onload = () => {
      // Draw the first frame on canvas and convert to data URL
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const firstFrameDataUrl = canvas.toDataURL();

      setFirstFrame(firstFrameDataUrl);
      setFullGif(gifLink);
    };
    img.onerror = (error) => {
      console.error("Error loading gif:", error);
    };
  }, [gifLink]);

  return <img src={isHovered ? fullGif : firstFrame} className="scale-150" />;
};

export default PokeGif;
