import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <section className="text-center">
      <p className="text-primary mt-16">Welcome to my portfolio!</p>
      <h1 className="text-7xl text-white my-10 font-bold">Mohammed Yeasin</h1>
      <h3 className="text-3xl">
        <span style={{ color: "white", fontWeight: "normal" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["MIS Student", "Web Developer", "Bookworm", "Enthusiast"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </span>
      </h3>
      <p className="w-1/2 mx-auto my-10 text-md">
        I'm <strong>Mohammed Yeasin</strong> a web developer specializing in
        building exceptional digital experiences. Currently, I'm focused on
        learning React Redux & NextJS for building amazing websites
      </p>
      <div>
        <div className="tooltip" data-tip="LinkedIn Profile">
          <Link to="https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page">
            <i className="px-4 text-3xl fa fa-linkedin-square"></i>
          </Link>
        </div>
        <div className="tooltip" data-tip="Facebook Profile">
          <Link>
            <i className="px-4 text-3xl fa fa-facebook"></i>
          </Link>
        </div>
        <div className="tooltip" data-tip="Message me on Telegram">
          <Link><i className="px-4 text-3xl fa fa-telegram"></i></Link>
        </div>
        <div className="tooltip" data-tip="Github Profile">
          <Link><i className="px-4 text-3xl fa fa-github"></i></Link>
        </div>
        <div className="tooltip" data-tip="Twitter Profile">
          <Link><i className="px-4 text-3xl fa fa-twitter"></i></Link>
        </div>
      </div>
      <Link to='/contact'><button className='my-10'>SEND ME A MAIL</button></Link>
    </section>
  );
};

export default HomeHeader;
