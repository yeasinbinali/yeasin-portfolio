"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import SocialLinks from '../SocialLinks/SocialLinks';

const WelcomeHeader = () => {
    const router = useRouter();

    const handleSendMail = () => {
        router.push('/contact');
    }

    return (
        <div className='text-center mt-28 mb-20'>
            <p className='text-md md:text-xl text-main'>Welcome to my portfolio!</p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold my-8'>Mohammed Yeasin</h1>
            <h3 className='text-2xl md:text-3xl'>
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
            <p className='text-justify mt-8 md:w-3/4 lg:w-1/2 mx-auto text-lg mb-8 px-4 md:px-0'>
                I'm <span className='font-semibold'>Mohammed Yeasin</span>, a dedicated web developer with a passion for crafting exceptional digital experiences. Currently, my focus is on mastering React Redux for creating sophisticated websites and delving into React Native for developing innovative mobile applications.
            </p>
            <SocialLinks></SocialLinks>
            <div onClick={handleSendMail} className='mt-8'>
                <Button name="Send me a Mail"></Button>
            </div>
        </div>
    );
};

export default WelcomeHeader;
