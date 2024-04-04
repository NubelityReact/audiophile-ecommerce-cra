import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const MouseTracker = () => {
  const initialState = { x: 0, y: 0 };
  const currentPositionRef = useRef<MousePosition>(initialState);
  const [position, setPosition] = useState<MousePosition>(initialState);

  const handleMouseMove = (event: MouseEvent) => {
    const pos = { x: event.clientX, y: event.clientY };
    currentPositionRef.current = pos;
    // setPosition(pos);
    console.log({ posx: event.clientX });
  };

  const handleClick = () => {
    setPosition(currentPositionRef.current);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ minWidth: 600, minHeight: 600, border: "1px solid green" }}
      onClick={handleClick}
    >
      <p>Position x </p> <code>{position.x}</code>
    </div>
  );
};

export default MouseTracker;
