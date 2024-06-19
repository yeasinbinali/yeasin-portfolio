"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from '../Button/Button';
import Link from 'next/link';

const WelcomeHeader = () => {
    return (
        <div className='text-center mt-16 mb-20'>
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
            <p className='text-justify mt-8 w-1/2 mx-auto text-lg'>
                I'm <span className='font-semibold'>Mohammed Yeasin</span>, a dedicated web developer with a passion for crafting exceptional digital experiences. Currently, my focus is on mastering React Redux for creating sophisticated websites and delving into React Native for developing innovative mobile applications.
            </p>
            <div className='flex items-center justify-center mt-8'>
                <Link href="https://www.linkedin.com/in/mohammed-yeasin-dev" passHref>
                    <div className="tooltip" data-tip="LinkedIn">
                        <FaLinkedin className='text-4xl'></FaLinkedin>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/mohammedyeasin0" passHref>
                    <div className="tooltip px-8" data-tip="Facebook">
                        <FaFacebook className='text-4xl'></FaFacebook>
                    </div>
                </Link>
                <Link href="https://github.com/yeasinbinali" passHref>
                    <div className="tooltip" data-tip="Github">
                        <FaGithub className='text-4xl'></FaGithub>
                    </div>
                </Link>
            </div>
            <div className='mt-8'>
                <Button name="SEND ME A MAIL"></Button>
            </div>
        </div>
    );
};

export default WelcomeHeader;
