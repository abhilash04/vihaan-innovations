import React from "react";
import { Box } from "@mui/material";
import carimg from "../../../../assets/car1-new.png";
const CarAnimationBanner = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "95vh",
    overflow: "hidden",
  };

  const backgroundCommon = {
    position: "absolute",
    width: "500%",
    display: "block",
    backgroundRepeat: "repeat-x",
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const cityStyle = {
    ...backgroundCommon,
    height: "900px",
    bottom: "200px",
    backgroundImage: `
    url(https://i.pinimg.com/originals/03/42/f0/0342f0d771ed35ab0cf65fe58e5293ff.png),
    url(https://i.pinimg.com/originals/03/42/f0/0342f0d771ed35ab0cf65fe58e5293ff.png)
  `,
    backgroundSize: "contain",
    backgroundPosition: "0 0, 100% 0",
    width: "200%",
    animation: "city 20s linear infinite",
  };

  const flowerStyle = {
    ...backgroundCommon,
    height: "301px",
    bottom: "200px",
    backgroundImage: `
    url(https://amberry.co.uk/wp/wp-content/uploads/2017/08/daisy-grass-am-1.png),
    url(https://amberry.co.uk/wp/wp-content/uploads/2017/08/daisy-grass-am-1.png)
  `,
    backgroundSize: "contain",
    backgroundPosition: "0 0, 100% 0",
    width: "200%",
    animation: "city 20s linear infinite",
  };

  const highwayStyle = {
    ...backgroundCommon,
    height: "200px",
    bottom: 0,
    backgroundImage: `
    url(https://us.123rf.com/450wm/andreykuzmin/andreykuzmin1605/andreykuzmin160500066/56495798-asphalt-highway-road-marks-top-view.jpg?ver=6),
    url(https://us.123rf.com/450wm/andreykuzmin/andreykuzmin1605/andreykuzmin160500066/56495798-asphalt-highway-road-marks-top-view.jpg?ver=6)
  `,
    backgroundSize: "contain",
    backgroundPosition: "0 0, 100% 0",
    width: "200%",
    animation: "highway 5s linear infinite",
  };

  const carStyle = {
    position: "absolute",
    bottom: "60px",
    width: "500px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  };

  const wheelContainerStyle = {
    position: "absolute",
    bottom: "224px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  };

  const wheelStyle = {
    width: "80px",
    height: "80px",
    animation: "wheel 1s linear infinite",
    position: "absolute",
  };

  const frontWheelStyle = {
    ...wheelStyle,
    left: "95px",
  };

  const backWheelStyle = {
    ...wheelStyle,
    left: "-172px",
  };

  return (
    <>
      {/* Keyframe styles */}
      <style>
        {`
          @keyframes city {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes highway {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes wheel {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <Box sx={containerStyle}>
        <Box sx={cityStyle}></Box>
        <Box sx={flowerStyle}></Box>
        <Box sx={highwayStyle}></Box>

        {/* Car Image */}
        <Box sx={carStyle}>
          <img
            src={carimg} // replace with your car image path
            alt="car"
            style={{
              width: "100%",
              animation: "car 1s linear infinite",
              verticalAlign: "middle",
            }}
          />
        </Box>

        {/* Wheels */}
        <Box sx={wheelContainerStyle}>
          <img
            src="https://pngimg.com/uploads/car_wheel/car_wheel_PNG23306.png"
            alt="back-wheel"
            style={backWheelStyle}
          />
          <img
            src="https://pngimg.com/uploads/car_wheel/car_wheel_PNG23306.png"
            alt="front-wheel"
            style={frontWheelStyle}
          />
        </Box>
      </Box>
    </>
  );
};

export default CarAnimationBanner;
