import React from "react";
import halo from "../assets/halo.jpg";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="248"
            height="270"
            fill="none"
            viewBox="0 0 248 270"
        >
            <path
                fill="url(#pattern0)"
                fillRule="evenodd"
                d="M110.3 9.973c22.917 2.704 45.634 3.535 66.485 13.417 23.038 10.918 46.756 23.776 59.072 46.088 12.674 22.962 15.195 51.199 8.646 76.593-6.245 24.21-27.931 39.687-43.653 59.134-16.383 20.266-26.794 46.921-50.624 57.484-24.872 11.025-53.924 8.263-79.972.404C44.327 255.27 16.3 242.875 4.235 218.64c-11.761-23.628 4.627-51.003 5.37-77.384.586-20.786-5.007-40.61-1.468-61.1C12.641 54.076 11.074 21.4 32.896 6.41 54.62-8.515 84.119 6.883 110.3 9.973z"
                clipRule="evenodd"
            ></path>
            <defs>
                <pattern
                    id="pattern0"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        transform="matrix(.00155 0 0 .00142 -.387 -.38)"
                        xlinkHref="#image0_5_33"
                    ></use>
                </pattern>
                <image
                    id="image0_5_33"
                    width="1080"
                    height="1083"
                    xlinkHref={halo}
                ></image>
            </defs>
        </svg>
    );
}

export default Icon;
