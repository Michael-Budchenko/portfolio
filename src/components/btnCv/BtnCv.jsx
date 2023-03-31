import React from "react";
import CvPdf from "./Budchenko.pdf";

const BtnCv = () => {
  return (
    <a href={CvPdf} className="btn">
      Download CV
    </a>
  );
};

export default BtnCv;
