import React from "react";
import image from "../../images/yeasin-portfolio-image.jpeg";

const About = () => {
  return (
    <section className='my-20'>
      <div className="flex justify-evenly items-center">
        <div className='w-1/2'>
          <img
            className="rounded-full w-80 mx-auto"
            src={image}
            alt="yeasinPortfolioImage"
          />
        </div>
        <div className='w-1/2'>
          <h3 className="text-3xl text-primary">About</h3><hr></hr>
          <p className='my-10 text-justify'>
            Hello! My name is Mohammed Yeasin and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2019 when I decided to exploring tech world and I've tried graphics
            designing, video editing, photo editing but none of those gave me as
            excitement as web development.
          </p>
          <p className='text-justify'>
            Fast-forward to today, and I've good hand over some web development
            technologies like HTML, CSS, JavaScript & ReactJS. I've built some
            frontend websites as well as some full stack websites all by alone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
