import React from "react";
import hero from "../../../assets/info_pic_4.png";
import { motion } from "framer-motion";

const IntroPicture = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" className={className}>
            <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                    <stop
                        id="stop1"
                        stopColor="rgba(248, 117, 55, 1)"
                        offset="0"
                    />
                    <stop
                        id="stop2"
                        stopColor="rgba(251, 168, 31, 1)"
                        offset="1"
                    />
                </linearGradient>
            </defs>
            <mask id="mask1" style={{ maskType: "alpha" }}>
                <path
                    fill="url(#sw-gradient)"
                    d="M 59.066 5.546 C 68.642 9.681 94.656 64.824 91.376 72.816 C 88.096 80.947 73.272 87.011 64.483 90.456 C 55.563 94.039 52.547 94.865 49.529 96.106 C 46.643 97.208 43.625 98.587 40.476 98.448 C 37.329 98.172 33.918 96.382 26.703 92.523 C 19.487 88.526 8.468 82.463 7.025 75.986 C 5.582 69.509 26.363 9.097 34.496 4.825 C 42.497 0.415 34.664 2.719 43.977 0.927 C 53.292 -1.002 49.621 1.549 59.066 5.546 Z"
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    style={{ transition: "all 0.3s ease 0s" }}
                />
            </mask>
            <g mask="url(#mask1)">
                <path
                    fill="url(#sw-gradient)"
                    d="M 76.946 50.629 C 86.522 54.764 94.656 64.824 91.376 72.816 C 88.096 80.947 73.272 87.011 64.483 90.456 C 55.563 94.039 52.547 94.865 49.529 96.106 C 46.643 97.208 43.625 98.587 40.476 98.448 C 37.329 98.172 33.918 96.382 26.703 92.523 C 19.487 88.526 8.468 82.463 7.025 75.986 C 5.582 69.509 13.847 62.481 21.98 58.209 C 29.981 53.799 37.985 52.145 47.298 50.353 C 56.613 48.424 67.501 46.632 76.946 50.629 Z"
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    style={{ transition: "all 0.3s ease 0s" }}
                />
                <motion.image
                    href={hero}
                    x={-5}
                    // y={14}
                    height={110}
                    width={110}
                    initial={{
                        y: 500,
                    }}
                    animate={{
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 150,
                        },
                    }}
                />
            </g>
        </svg>
        // <svg
        //   id="sw-js-blob-svg"
        //   viewBox="0 0 100 100"
        //   xmlns="http://www.w3.org/2000/svg"
        //   version="1.1"
        //   className={className}
        // >
        //   <defs>
        //     <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        //       <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
        //       <stop
        //         id="stop2"
        //         stopColor="rgba(251, 168, 31, 1)"
        //         offset="100%"
        //       ></stop>
        //     </linearGradient>
        //   </defs>
        //   <mask id="mask1" style={{ maskType: "alpha" }}>
        //     <path
        //       fill="url(#sw-gradient)"
        //       d="M 23.687 -35.844 C 27.987 -32.544 34.81 -3.691 30.042 0.309 C 24.39 5.051 38 6.7 36.1 11.5 C 34.3 16.3 24.6 18.4 17.2 21.3 C 9.9 24.2 4.9 28 1.4 26 C -2.1 24 -4.1 16.3 -10.5 13 C -16.9 9.8 -27.6 11.1 -28.1 9.2 C -28.6 7.3 -18.8 2.2 -14.7 -3 C -10.6 -8.3 -20.246 -31.097 -18.746 -35.297 C -17.246 -39.497 -0.642 -46.939 2.858 -45.339 C 6.358 -43.839 19.387 -39.144 23.687 -35.844 Z"
        //       width="100%"
        //       height="100%"
        //       transform="matrix(1, 0, 0, 1, 50, 49.99999999999999)"
        //       strokeWidth="0"
        //     />
        //   </mask>
        //   <g mask="url(#mask1)">
        //     <path
        //       fill="url(#sw-gradient)"
        //       d="M9,-12.6C13.3,-9.3,19.6,-8.8,25.7,-4.8C31.9,-0.8,38,6.7,36.1,11.5C34.3,16.3,24.6,18.4,17.2,21.3C9.9,24.2,4.9,28,1.4,26C-2.1,24,-4.1,16.3,-10.5,13C-16.9,9.8,-27.6,11.1,-28.1,9.2C-28.6,7.3,-18.8,2.2,-14.7,-3C-10.6,-8.3,-12.2,-13.6,-10.7,-17.8C-9.2,-22,-4.6,-25.1,-1.1,-23.5C2.4,-22,4.7,-15.9,9,-12.6Z"
        //       width="100%"
        //       height="100%"
        //       transform="translate(50 50)"
        //       strokeWidth="0"
        //       style={{ transition: "all 0.3s ease 0s" }}
        //     ></path>
        //     <motion.image
        //       href={hero}
        //       x={27}
        //       // y={14}
        //       height={60}
        //       width={60}
        //       initial={{
        //         y: 50,
        //       }}
        //       animate={{
        //         y: 18,
        //         transition: {
        //           type:"spring",
        //           stiffness:400,
        //           damping:20
        //         },
        //       }}
        //     />
        //   </g>
        // </svg>
    );
};

export default IntroPicture;
