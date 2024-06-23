import Image from 'next/image';
import React from 'react';
import './About.css';
import HeaderName from '../HeaderName/HeaderName';

const About = () => {
    return (
        <div className='mb-20'>
            <HeaderName name={"About"}></HeaderName>
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                <div className='md:w-3/4 lg:w-1/2'>
                    <p className='text-justify'>Hello! My name is Mohammad Yasin and I enjoy making creative things. I started web development journey in 2021. Despite many obstacles, I never stopped. Apart from this, in the future I also want to learn digital marketing, graphics design, video editing because these jobs give me great joy. I&apos;ve good hand over some web development technologies like HTML, CSS, JavaScript & ReactJS. I&apos;ve built some frontend websites as well as some full stack websites all by alone.</p>
                    <p className='text-justify my-5'>My journey in coding is driven by a relentless pursuit of excellence, constantly exploring new technologies and methodologies to deliver cutting-edge solutions. With a keen eye for detail and a commitment to user-centric design, I strive to push boundaries and elevate user experiences across platforms.</p>
                </div>
                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className='md:w-3/4 lg:w-1/2 mx-auto flex justify-center mb-5 lg:mb-0'>
                    <Image
                        className='profile-img'
                        src='/images/yeasin.png'
                        width={300}
                        height={100}
                        alt='profile'
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default About;