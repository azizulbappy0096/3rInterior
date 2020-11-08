import React from "react";
import "./WorkingProcess.css";

function WorkingProcess() {
  return (
    <div className="workingPlan">
      <h3 className="workingPlan__title">HOW IT WORKS</h3>

      <h1 className="workingPlan__title">Online interior design in 3 steps</h1>

      <div className="workingPlan__steps">
        <section className="workingPlan__step">
          <img src="./img/HP.jpg" />
          <div className="workingPlan__step--md">
            <h2> 1. Show Us Your Space </h2>
            <p>
              Take a few photos (or scan your room with our iOS app) and tell us
              about your project.
            </p>
          </div>
        </section>
        <section className="workingPlan__step">
          <img src="./img/HP2.png" />
          <div className="workingPlan__step--md">
            <h2> 2. Get Custom Design Plans </h2>
            <p>
              We create an interactive 3D design of your room that fits your
              style and budget then help revise until you’re 100% happy.
            </p>
          </div>
        </section>
        <section className="workingPlan__step">
          <img src="./img/HP3.png" />
          <div className="workingPlan__step--md">
            <h2> 3. Shop with Confidence </h2>
            <p>
              Shop your look directly from your designs in one easy checkout
              with exclusive discounts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkingProcess;
