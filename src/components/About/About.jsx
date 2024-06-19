import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold text-main'>About __</h1>
                <p>Hello! My name is Mohammad Yasin and I enjoy making creative things. I started web development journey in 2021. Despite many obstacles, I never stopped. Apart from this, in the future I also want to learn digital marketing, graphics design, video editing because these jobs give me great joy. I've good hand over some web development technologies like HTML, CSS, JavaScript & ReactJS. I've built some frontend websites as well as some full stack websites all by alone.</p>
                <p>My journey in coding is driven by a relentless pursuit of excellence, constantly exploring new technologies and methodologies to deliver cutting-edge solutions. With a keen eye for detail and a commitment to user-centric design, I strive to push boundaries and elevate user experiences across platforms.</p>
            </div>
            <div className='w-1/2 h-1/2 mx-auto'>
                <Image
                    className='mx-auto rounded-full'
                    src='/images/yeasin.png'
                    width={300}
                    height={300}
                    alt='profile'
                ></Image>
            </div>
        </div>
    );
};

export default About;