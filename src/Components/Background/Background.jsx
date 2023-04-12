import React, { useEffect, useState } from "react";
import "./Background.css";
import ProgressiveImage from "react-progressive-image-loading";
import useSplash from "../../Hook/useSplash";

export default function Background() {
  const [background, setBackground] = useState();
  const { getBackground } = useSplash();

  useEffect(() => {
    getBackground("wallpapers")
      .then((res) => {
        setBackground(res);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <>
      {background && (
        <ProgressiveImage
          preview={background?.urls.thumb}
          src={background?.urls.full}
          render={(src, style) => (
            <div
              className="background_image"
              style={Object.assign(style, { backgroundImage: `url(${src})` })}
            />
          )}
        />
      )}
    </>
  );
}
