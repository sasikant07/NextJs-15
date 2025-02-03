// import { serverSideFunction } from "@/utils/server-utils";
import { clientSidefunctions } from "@/utils/client-utils";
import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  /*
  const result = serverSideFunction(); // it will throw error because the util function using server-only import
  return <h1>Client Route {result}</h1>;
  */

  const theme = useTheme();
  // const settings = {
  //   dots: true,
  // };
  const result = clientSidefunctions();
  return (
    <div style={{ color: theme.colors.primary }}>
      <h1>Client route page</h1>
      <p>{result}</p>
    </div>
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="https://picsum.photos/400/200" />
    //     </div>
    //   </Slider>
    // </div>
  );
}
