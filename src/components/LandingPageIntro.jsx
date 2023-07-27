import { useEffect, useRef } from "react";
import "../styles/LandingPageIntro.css";

const LandingPageIntro = ({ setIntroAnimating }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const pathElement = pathRef.current;

    pathElement.beginElement();

    setTimeout(() => {
      pathElement.endElement();
      setIntroAnimating(false);
    }, 2500);
  }, []);

  return (
    <div className="landing-page-intro-container">
      <svg
        id="logo-desktop"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.8644 66.9164C-20.4711 69.5576 -1.05714 8.80851 40.5442 3.526C73.8252 -0.700001 66.7887 21.5146 65.505 35.221C64.0153 42.6447 61.2419 51.0688 52.9216 53.2097C43.3426 55.6744 44.6013 42.6447 48.8644 16.7326C47.1482 24.1559 46.091 45.7863 34.9973 51.0688C19.8838 58.2655 22.9791 30.8192 26.677 16.7326"
          stroke="#f1faee"
          strokeWidth="5"
          strokeDasharray="0,0,0,315.8570861816406"
        >
          <animate
            ref={pathRef}
            attributeType="XML"
            attributeName="stroke-dasharray"
            dur="2s"
            values="0,0,0,315.8570861816406; 
                    0,157.9285430908203,157.9285430908203,0; 
                    315.8570861816406,0,0,0"
            keyTimes="0; 0.5; 1"
            fill="freeze"
          />
        </path>
      </svg>
    </div>
  );
};

export default LandingPageIntro;
