import React from "react";
import Layout from "../components/layouts/resume-layout";
import "../styles/resume.scss";
require("dotenv").config();

const PDF =
  "https://drive.google.com/file/d/" +
  // process.env.REACT_APP_FILE +
  "1kth7e0WQDpruxVz4FI5xKcp6gehQGrwM" +
  "/preview?usp=embed_googleplus";

// const PDF = process.env.GATSBY_RESUME;
// const styles = {
//   border: 0,
//   top: 0,
//   left: 0,
//   width: 640,
//   height: 700,
//   position: absolute,
// };

const Resume: React.FC = () => (
  <Layout>
    {/* <div className="resume">
      <object data={PDF} type="application/pdf" width="100%" height="100%">
        Resume
      </object>
    </div>
    <div className="resume-mobile">
      <button className="resume-btn" onClick={() => window.open(PDF)}>
        View Resume
      </button>
    </div> */}
    {/* <p>{process.env.REACT_APP_FILE}</p> */}
    <div style={{ height: "100vh" }}>
      <iframe
        src={PDF}
        style={{
          width: "100%",
          height: "100vh",
          display: "block",
        }}
      ></iframe>
    </div>
  </Layout>
);

export default Resume;
