import React from "react";
import htmlogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import bootlogo from "../assets/bootlogo.png";
import nextlogo from "../assets/nextlogo.png";
import explogo from "../assets/explogo.png";
import phplogo from "../assets/phplogo.png";
import jslogo from "../assets/jslogo.png";
import reactlogo from "../assets/reactlogo.png";
import binar from "../assets/binar.png";
import ukip from "../assets/ukip.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Services = () => {
  const logo = [
    htmlogo,
    csslogo,
    bootlogo,
    nextlogo,
    explogo,
    phplogo,
    jslogo,
    reactlogo,
  ];
  const education = [
    {
      logo: ukip,
      name: "UKI Paulus Makassar",
      jur: "Teknik Infomatika",
      tanggal: "2022 - Des 2022",
    },
    {
      logo: binar,
      name: "Binar Academy",
      jur: "Full Stack Web",
      tanggal: "2017 - Okt 2021",
    },
  ];
  return (
    <section id="services" className="section min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row mb-10 md:mb-32 md:mt-40 lg:mt-0">
          <motion.div
            className="lg:flex-1 mb-12 lg:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="h2 text-accent text-center">Skills</h2>
            <div className="grid grid-cols-4 place-items-center px-16">
              {logo.map((logo, index) => {
                return (
                  <div
                    className=" w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] flex justify-center items-center my-3 rounded mx-1 bg-cyan-800 p-2 "
                    key={index}
                  >
                    <img src={logo} alt="logo" />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex-1 mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent text-center">Education</h2>
            <div className="flex justify-center gap-5 ">
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[180px] h-[200px] lg:w-[200px] lg:h-[250px] lg:mb-4 flex justify-center items-center flex-col rounded bg-cyan-800`}
                  >
                    <div className="w-[50px]">
                      <img src={edu.logo} alt="" />
                    </div>
                    <h4 className="text-[15px] font-bold text-slate-400">
                      {edu.name}
                    </h4>
                    <p className="text-slate-800">{edu.jur}</p>
                    <p className="text-slate-700">{edu.tanggal}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
