import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='flex items-center justify-center'>
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
    );
};

export default SocialLinks;