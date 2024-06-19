"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from '../Button/Button';


const WelcomeHeader = () => {
    return (
        <div className='text-center my-16'>
            <p className='text-xl text-main'>Welcome to my portfolio!</p>
            <h1 className='text-6xl font-bold my-8'>Mohammed Yeasin</h1>
            <h3 className='text-3xl'>
                <Typewriter
                    words={['MIS Student', 'Web Developer', 'Bookworm', 'Coder']}
                    loop={0} // 0 for infinite loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </h3>
            <p className='text-justify mt-8 w-1/2 mx-auto text-lg'>I'm <span className='font-semibold'>Mohammed Yeasin</span> a web developer specializing in building exceptional digital experiences. Currently, I'm focused on learning React Redux & TypeScript for building amazing websites.</p>
            <div className='flex items-center justify-center mt-8'>
                <div className="tooltip" data-tip="LinkedIn">
                    <FaLinkedin className='text-4xl' />
                </div>
                <div className="tooltip px-8" data-tip="Facebook">
                    <FaFacebook className='text-4xl' />
                </div>
                <div className="tooltip" data-tip="Github">
                    <FaGithub className='text-4xl' />
                </div>
            </div>
            <div className='mt-8'>
                <Button name="SEND ME A MAIL"></Button>
            </div>
        </div>
    );
};

export default WelcomeHeader;
