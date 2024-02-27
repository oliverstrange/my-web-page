"use client";

import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";

const About = () => {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        Throughout school my favourite subject was{" "}
        <span className="font-medium">Computer Science.</span> I loved
        programming in my free time, even completing work experience at a{" "}
        <span className="font-medium">UX web design</span>{" "}
        company when I was 16. I continued this through university, taking a degree in it at the{" "}
        <span className="font-medium">University of Nottingham.</span>{" "}
        My time there gave me the opportinty to learn a variety of programming languages
        such as <span className="font-medium">Python, Java</span> and <span className="font-medium">C#,</span>{" "}
        and explore new fields like <span className="font-medium">AI</span> and{" "}
        <span className="font-medium">Android Development.</span>{" "}
        My <span className="italic">favourite</span> part of my studies there, however, was always participating in
        group projects. 
      </p>

      <p>
        Since university, I've been working as a <span className="font-medium">full-stack developer</span>{" "}
        at Ceox Services, developing business applications for public sector clients.
      </p>
    </motion.section>
  );
}

export default About;