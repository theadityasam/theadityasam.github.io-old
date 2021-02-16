import React from "react";

import Layout from "../components/layouts/home-layout";
import Contact from "../components/sections/contact";
import SEO from "../components/seo";

import "../styles/about.scss";

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2>Background</h2>
        <p className="info">
          {/* My name is Kyle. I'm a self taught software developer turned college
          student based Arizona. I found my passion for learning computer
          sciences at the age of 16 and have been programming ever since. I've
          dedicated countless hours to learning and expanding this passion.
          Being able to effectively teach myself is something I am most proud of
          about myself. I have developed an avid work ethic and disciplinary
          skills along my journey in life. Strong creative and critical thinking
          skills have helped me to excel in areas like web development as well
          as functional and object oriented programming. In free my time, I
          immerse myself in learning new programming technologies and how to
          better myself as a programmer but also find joy with meditaion, music,
          hiking, and spending time under the sun.  */}
          My name is Aditya Samantaray &#128075;. I'm a final year undergraduate
          student from IIIT Bhubaneswar, India &#127470;&#127475;, currently
          majoring in Computer Engineering. I've been passionate about computer
          systems and programming since my high school days and have been coding
          ever since. I've a knack for learning things fast and have
          consequently worked hard exploring various fields such as Data
          Science, Deep Learning, Fullstack Development as well as Site
          Reliability. I've demonstrated experience in data analytics, full
          stack development as well as open source projects. My dream is to
          build scalable data driven software solutions that can mend the chaos
          of our world.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>
              <a href="https://www.iiit-bh.ac.in/" target="blank">
                International Institute of Information Technology, Bhubaneswar
              </a>
            </p>
            <p>Bachelor of Technology, Computer Engineering</p>
            <p>8.2 CGPA</p>
          </li>
          <li>
            <p>DAV Public School, Nerul</p>
            <p>
              AISSCE(High School), Physics, Chemistry, Maths, Computer Science
            </p>
            <p>92%</p>
          </li>
        </ul>
        <h2>Experience</h2>
        <ul>
          <li>
            <p>
              <b>Dell Technologies</b>
            </p>
            <p>
              <b>SDE Intern</b>
            </p>
            <p>Designing, building and maintaining client web applications.</p>
          </li>
          <li>
            <p>
              <b>Google Summer of Code 2019</b>
            </p>
            <p>
              <b>Student Developer @ The R Project for Statistical Computing</b>
            </p>
            <p>Contributing to open source user authentication application.</p>
          </li>
          <li>
            <p>
              <b>Pepper Content</b>
            </p>
            <p>
              <b>Process Automation Intern</b>
            </p>
            <p>Contributing to open source user authentication application.</p>
          </li>
        </ul>
        <h2>Most Exciting Project</h2>
        My GSOC project "Iregnet on CRAN" with The R Project for Statistical
        Computing would be my most exciting project that I've ever worked on.
        Iregnet is a machine learning library for survival analysis in R, and as
        part of my project, I had to implement cross validation method in the
        package, conduct benchmarks to figure out stoppage conditions for
        performance improvements (with the right set of parameters, performance
        improvements were observed in all cases), documenting all the features
        implemented in Iregnet and making sure that the package passes all the
        build checks required.
        <br />
        Iregnet made my summer incredible, I learnt many new things during those
        4 months on how to deal with large codebases, best practices for using
        C++ with R, and most importantly - how to create a complete R package
        employing C++ functions, detailed documentation, CI/CD build test
        pipelines and publish it on CRAN. Also, my mentor made me the co-author
        of Iregnet which provided me with a sense of satisfaction that my hard
        work bore fruit and now I co-author an R package.
        <br />
        My GSOC project had armed me with the knowledge of dealing with
        production grade code bases. This became evident during my internship
        with Dell Technologies, wherein to the amazement of my teammates, even
        with zero prior experience in web development, I was able to get up to
        speed with our .Net Core project repo and the Gitlab pipelines within a
        matter of days.
      </div>
      <Contact />
    </div>
  </Layout>
);

export default About;
