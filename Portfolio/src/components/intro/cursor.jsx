import React, { useRef, useEffect } from "react";
import "./cursor.css";
import { useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  const [cursorPos, setCursorPos] = useState({ x: 30, y: 30 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX + 30, y: e.clientY + 30 });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
      cursor2Ref.current.style.left = `${e.clientX}px`;
      cursor2Ref.current.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorRef, cursor2Ref]);

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
          <div className="cursor" ref={cursorRef}></div>
          <div className="cursor2" ref={cursor2Ref}></div>
        </div>
      </div>
    </>
  );
}

export default Cursor;
