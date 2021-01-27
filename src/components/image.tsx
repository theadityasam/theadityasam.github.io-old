// import React from 'react'

// interface Props {
//     mode?: string;
//     src: boolean;
//     height?: number;
//     width?: number;

// }

// const Image: React.FC<Props> = ({ mode, src, height, width, style, ...props }) => {
//   let modes = {
//     fill: "cover",
//     fit: "contain",
//   };
//   let size = modes[mode] || "contain";

//   let defaults = {
//     height: height || 100,
//     width: width || 100,
//     backgroundColor: "gray",
//   };

//   let important = {
//     backgroundImage: `url("${src}")`,
//     backgroundSize: size,
//     backgroundPosition: "center center",
//     backgroundRepeat: "no-repeat",
//   };

//   return <div {...props} style={{ ...defaults, ...style, ...important }} />;
// };

// export default Image;
