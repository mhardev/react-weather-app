import { useRef } from "react"


function HorizontallyScrollable({ children, className='' }) {
    const scrollRef = useRef();

    const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX;
      const walk = x - startX;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const startX = e.touches[0].pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = x - startX;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      className={className}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      {children}
    </div>
  );
}

export default HorizontallyScrollable;