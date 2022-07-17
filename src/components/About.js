import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color:props.mode ==='dark'?'white':'#04152f',
    backgroundColor:props.mode ==='dark'?'rgb(49 74 112)':'white',
  }
  
  return (
    <div className="continer">
      <h1 className="my-3" style={{ color:props.mode ==='dark'?'white':'#04152f',backgroundColor:props.mode ==='dark'?'#04152f':'white'}}>About Us</h1>
      <div className="accordion mx-3" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About Me</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            My good name is Pratham.I am Pursuing my BTech(Information Technology) from BVM(Birla
                        Vishvakarma Mahavidyalaya) and currently in 3'rd year. I am
                        enthusiastic in learning new Technologies and exploring the Corporate
                        World.I would like to work in a challenging environment that lets me
                        explore my knowledge
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Download My Resume</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <a href="assets/Pratham.pdf">
                        <i class="fas fa-download me-2"></i>
                        Download Resume
                    </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Contact Me</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            <strong>Mobile : </strong>9998746560
              <br/>
            <strong>Email : </strong>barotpratham30@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
