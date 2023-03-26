import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
// images
import Img1 from "../assets/porto1.png";
import Img2 from "../assets/porto2.png";
import Img3 from "../assets/porto3.png";

const Work = () => {
  return (
    <section className="section min-h-screen" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-12 mb-8 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Portofolio
              </h2>
              <p className="max-w-sm mb-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                voluptatum. Doloremque, nesciunt ipsam. Saepe commodi iste nemo.
                Modi, ad accusantium?
              </p>
              <button className="btn btn-sm">View all portofolio</button>
            </div>
            {/* images */}
            <div className="w-[450px] h-[200px] lg:w-[500px] lg:h-[220px] group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-150 transition-all duration-500"
                src={Img3}
                alt="kdkdkkd"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">title kdkd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-14 "
          >
            <div className="w-[450px] h-[200px] lg:w-[500px] lg:h-[220px] group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-150 transition-all duration-500"
                src={Img2}
                alt="kdkdkkd"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">title kdkd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project</span>
              </div>
            </div>
            <div className="w-[450px] h-[200px] lg:w-[500px] lg:h-[220px] group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-150 transition-all duration-500"
                src={Img1}
                alt="kdkdkkd"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">title kdkd</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
