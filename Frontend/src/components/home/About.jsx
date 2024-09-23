import React from "react";
import { about } from "../data/Data.jsx";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to{" "}
                <span className="text-primary text-uppercase">Snoring-Inn</span>
              </h1>
              <p className="mb-4">
                "Experience the elegance of seamless stays, where every moment is
                crafted with care, ensuring your comfort and relaxation in a serene
                and sophisticated setting."
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div key={key} className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/src/assets/about-1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/src/assets/about-2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/src/assets/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/src/assets/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
