import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
};

export default function StarRating({
  maxRating = 5,
  color = "yellow",
  size = 48,
  defaultValue = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultValue);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          color={color}
          size={size}
          full={tempRating > 0 ? tempRating >= i + 1 : rating >= i + 1}
          onRate={() => handleRating(i + 1)}
          onHoverIn={() => setTempRating(i + 1)}
          onHoverOut={() => setTempRating(0)}
        />
      ))}
    </div>
  );
}

function Star({ color, size, full, onRate, onHoverIn, onHoverOut }) {
  const starStyle = {
    display: "block",
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={full ? color : "none"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={color}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </span>
  );
}
