import Link from 'next/link';
import React from 'react';

const resume = () => {
    return (
        <div className='mt-10 mb-20 border-[1px] border-slate-400 p-10'>
            <h1 className='text-4xl'>Mohammed Yeasin</h1>
            <h4 className='text-xl mt-4'>Frontend Web Developer</h4>
            <hr className='text-slate-400'/>
            <div className='mt-4'>
                <p>Email: <span className='underline'>yeasinbinali@gmail.com</span> | Mobile: (+880) 1305256024</p>
                <p>Address: Dhaka, Bangladesh</p>
                <div>
                    <Link className='text-sky-700' href={""}>Personal Website</Link> | <Link className='text-sky-700' href={""}>LinkedIn</Link> | <Link className='text-sky-700' href={""}>Github</Link>
                </div>
            </div>
        </div>
    );
};

export default resume;