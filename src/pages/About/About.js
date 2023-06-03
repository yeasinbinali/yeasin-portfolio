import React from "react";
import image from "../../images/yeasin-portfolio-image.jpeg";

const About = () => {
  return (
    <section className="my-20">
      <div className="flex justify-evenly items-center">
        <div className="w-1/2">
          <img
            className="rounded-full w-80 mx-auto"
            src={image}
            alt="yeasinPortfolioImage"
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-primary">
            About
            <hr />
          </h3>
          <p className="my-10 text-justify">
            Hello! My name is Mohammad Yasin and I enjoy making creative things.
            I started web development journey in 2021. Despite many obstacles, I
            never stopped. Apart from this, in the future I also want to learn
            digital marketing, graphics design, video editing because these jobs
            give me great joy.
          </p>
          <p className="text-justify">
            I've good hand over some web development technologies like HTML,
            CSS, JavaScript & ReactJS. I've built some frontend websites as well
            as some full stack websites all by alone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
