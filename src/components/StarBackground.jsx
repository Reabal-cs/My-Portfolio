import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);


  useEffect(() => {
    generateStars();
   

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  );

  const pastelColors = [
    "rgba(255, 182, 193, 0.8)", // light pink
    "rgba(173, 216, 230, 0.8)", // light blue
    "rgba(221, 160, 221, 0.8)", // plum
    "rgba(255, 250, 205, 0.8)", // lemon chiffon
    "rgba(240, 248, 255, 0.8)", // alice blue
  ];

  const newStars = [];

  for (let i = 0; i < numberOfStars; i++) {
    const color = isDark ? "#ffffff" : pastelColors[Math.floor(Math.random() * pastelColors.length)];
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
      color,
    });
  }

  setStars(newStars);
};

 

  

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
     {stars.map((star) => (
 <div
  key={star.id}
  className="star"
  style={{
    width: `${star.size}px`,
    height: `${star.size}px`,
    left: `${star.x}%`,
    top: `${star.y}%`,
    opacity: star.opacity,
    backgroundColor: star.color,
    animationDuration: `${star.animationDuration}s`,
    animationDelay: `${Math.random() * 6}s`,
  }}
/>
))}

      

    </div>
  );
};
