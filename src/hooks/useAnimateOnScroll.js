import { useState, useEffect } from "react";

const useAnimateOnScroll = () => {
  const [animate, setAnimate] = useState(false);

  const animateOnScrollHandler = () => {
    if (window.scrollY > 100) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateOnScrollHandler);

    return () => {
      window.removeEventListener("scroll", animateOnScrollHandler);
    };
  }, []);
  return animate;
};

export default useAnimateOnScroll;
