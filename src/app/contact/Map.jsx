import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false, // Disable server-side rendering
});
const Map = () => {
  return <DynamicMap />;
};

export default Map;
