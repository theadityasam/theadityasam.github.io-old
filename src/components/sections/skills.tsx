/*eslint  jsx-a11y/no-noninteractive-element-interactions: "off"*/
/*eslint  jsx-a11y/control-has-associated-label: "off"*/
/*eslint  jsx-a11y/click-events-have-key-events: "off"*/
import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import "../../styles/sections/skills.scss";

import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiCplusplus,
  SiJava,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiNodeDotJs,
  SiApollographql,
  SiSocketDotIo,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMariadbfoundation,
  SiAmazonaws,
  SiMicrosoftazure,
  SiNetlify,
  SiHeroku,
  SiGithub,
  SiNpm,
  SiR,
  SiPython,
  SiDotNet,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { DiSass, DiDotnet, DiPostgresql } from "react-icons/di";
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from "react-icons/ri";
import { GiKoala } from "react-icons/gi";
import { VscDatabase } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";

const Skills: React.FC = () => {
  const [tab, setTab] = useState<object>({ a: true });

  const Tab = ({ children, t }) => (
    <li
      className={tab[t] ? "active-tab" : ""}
      onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}
    >
      {children}
    </li>
  );

  const Anim = ({ Icon, name }) => (
    <ScrollAnimation
      className="project-anim"
      initiallyVisible={true}
      animateIn="pulse"
      animateOnce={true}
      duration={0.5}
    >
      <li>
        <p>
          <Icon />
        </p>
        <p>{name}</p>
      </li>
    </ScrollAnimation>
  );

  const Icons = ({ children, t }) => (
    <>
      {tab[t] && (
        <section>
          <ul>{children}</ul>
        </section>
      )}
    </>
  );

  return (
    <div className="skills-section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-cont">
        <ul className="tabs">
          <Tab t="a">
            <span>Programming </span>
            <span>Languages</span>
          </Tab>
          <Tab t="b">
            <span>Machine Learning </span>
            <span>Deep Learning</span>
          </Tab>
          <Tab t="c">
            <span>Front-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="d">
            <span>Back-end </span>
            <span>Technologies</span>
          </Tab>

          <Tab t="e">
            <span>Databases and</span>
            <span>Deployment</span>
          </Tab>
        </ul>

        <Icons t="a">
          <Anim Icon={SiCplusplus} name="C++" />
          <Anim Icon={SiR} name="R" />
          <Anim Icon={SiPython} name="Python" />
          <Anim Icon={SiCsharp} name="CSharp" />
          <Anim Icon={SiJava} name="Java" />
          <Anim Icon={SiJavascript} name="JavaScript" />
          <Anim Icon={SiTypescript} name="TypeScript" />
        </Icons>
        <Icons t="b">
          <Anim Icon={SiTensorflow} name="Tensorflow" />
          <Anim Icon={SiPytorch} name="Pytorch" />
        </Icons>
        <Icons t="c">
          <Anim Icon={SiDotNet} name=".NET Core" />
          <Anim Icon={SiReact} name="React" />
          <Anim Icon={SiRedux} name="Redux" />
          <Anim Icon={RiGatsbyLine} name="Gatsby" />
          <Anim Icon={SiNextDotJs} name="Next" />
          <Anim Icon={RiHtml5Line} name="HTML" />
          <Anim Icon={RiCss3Fill} name="CSS" />
          <Anim Icon={DiSass} name="SASS" />
        </Icons>
        <Icons t="d">
          <Anim Icon={SiNodeDotJs} name="Express.js" />
          <Anim Icon={GiKoala} name="Koa.js" />
          <Anim Icon={GrMysql} name="SQL" />
          <Anim Icon={SiGraphql} name="GraphQL" />
          <Anim Icon={SiApollographql} name="Apollo" />
          <Anim Icon={SiSocketDotIo} name="Socket.io" />
        </Icons>

        <Icons t="e">
          <Anim Icon={DiPostgresql} name="PostgreSQL" />
          <Anim Icon={SiMongodb} name="Mongo DB" />
          <Anim Icon={SiMysql} name="MySQL" />
          <Anim Icon={SiAmazonaws} name="AWS" />
          <Anim Icon={SiMicrosoftazure} name="Azure" />
          <Anim Icon={SiGithub} name="Github" />
          <Anim Icon={SiNetlify} name="Netlify" />
          <Anim Icon={SiHeroku} name="Heroku" />
        </Icons>
      </div>
    </div>
  );
};

export default Skills;
