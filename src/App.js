import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import { SketchPicker } from "react-color";
import { useEffect } from "react";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";

function App() {
  const colorRef = useRef();

  const [color, setColor] = useState("");

  const [colorPickerClass, setColorPickerClass] = useState("colorPickerNone");
  const [openColorPicker, setOpenColorPicker] = useState(false);

  const handleColorPicker = (e) => {
    setColor(e.hex);
    if (e.rgb.r * 0.299 + e.rgb.g * 0.587 + e.rgb.b * 0.114 > 186) {
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#000000"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#ffffff"
      );
    }
  };

  useEffect(() => {
    console.log("openColorPicker clicked");
    if (openColorPicker === true) {
      setColorPickerClass("colorPickerBlock");
    } else {
      setColorPickerClass("colorPickerNone");
    }
  }, [openColorPicker]);

  useEffect(() => {
    document.documentElement.style.setProperty("--main-bg-color", color);
  }, [color]);

  return (
    <div className="App">
      <div ref={colorRef} className={`colorpickerBox ${colorPickerClass}`}>
        <SketchPicker
          color={color}
          onChangeComplete={handleColorPicker}
        ></SketchPicker>
      </div>
      <Navbar
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
