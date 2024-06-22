import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='text-center mb-20'>
            <SocialLinks></SocialLinks>
            <p className='my-3'>© Copyright 2030</p>
            <p className='font-semibold text-lg'><Link href={"https://github.com/yeasinbinali"}>Designed & Developed by <span className='font-bold'>YEASIN</span></Link></p>
            <p className='mt-3'>This website is made using <span className='font-semibold'>NEXT.js</span></p>
        </div>
    );
};

export default Footer;