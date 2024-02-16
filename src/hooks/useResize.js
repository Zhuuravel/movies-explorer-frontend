import { useEffect, useCallback, useState } from "react";

//функция ресайза
function useResize() {

  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    let timer;

    function handleScreenResize() {
      setScreenWidth(getScreenWidth());
    }

    function handleSetTimeout() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleScreenResize();
        }, 1000);
      }
    }

    window.addEventListener("resize", handleSetTimeout);
    return () => window.removeEventListener("resize", handleSetTimeout);
  }, [getScreenWidth]);

  return screenWidth;
}

export default useResize;