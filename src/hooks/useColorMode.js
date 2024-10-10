import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";

    const bodyclass = window.document.body.classList;
    colorMode === "dark"
      ? bodyclass.add(className)
      : bodyclass.remove(className);
  }, [colorMode]);

  return [colorMode,setColorMode]
};

export default useColorMode;
