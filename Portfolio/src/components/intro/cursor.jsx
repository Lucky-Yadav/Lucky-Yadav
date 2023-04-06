import React, { useRef, useEffect } from "react";
import "./cursor.css";
import { useState } from "react";
import { TbTexture } from "react-icons/tb";

function Cursor() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const [isMoving, setIsMoving] = useState(false);

  const [cursorPos, setCursorPos] = useState({ x: 30, y: 30 });

  const handleMouseMove = (e) => {
    setIsMoving(true);
    setCursorPos({ x: e.clientX + 30, y: e.clientY + 30 });
  };

  useEffect(() => {
    const handleMouseStop = () => {
      setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseStop);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseStop);
    };
  }, [cursorRef, cursor2Ref, setIsMoving]);

  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <div
          style={{
            position: "absolute",
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <div className="cursor" ref={cursorRef}>
            {/* {TbTexture} */}
            <div className="wave_box">
              {/* Waves Container */}
              <div>
                <svg
                  className={`waves ${isMoving ? "waves-moving" : ""}`}
                  viewBox="0 24 150 28"
                  preserveAspectRatio="none"
                  shapeRendering="auto"
                >
                  <defs>
                    <path
                      id="gentle-wave"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                  </defs>
                  <g className="parallax">
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="0"
                      fill="rgba(255,255,255,0.7)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="3"
                      fill="rgba(255,255,255,0.5)"
                    />
                    <use
                      xlinkHref="#gentle-wave"
                      x="48"
                      y="5"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
                </svg>
              </div>
              {/* Waves end */}
            </div>
          </div>
          <div className="cursor2" ref={cursor2Ref}>
            {TbTexture}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cursor;
