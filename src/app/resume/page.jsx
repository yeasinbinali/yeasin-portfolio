import Button from '@/components/Button/Button';
import Link from 'next/link';
import React from 'react';

const resume = () => {
    return (
        <div className='mt-28 mb-20'>
            <div className='border-[1px] border-slate-400 p-5 md:p-10 w-[100%] md:w-[80%] h-[600px] overflow-x-auto mx-auto text-black'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>Mohammed Yeasin</h1>
                <h4 className='text-lg md:text-xl mt-4'>Frontend Web Developer</h4>
                <hr />
                <div className='mt-4'>
                    <p className="text-sm md:text-[16px]">Email: <span className='underline'>yeasinbinali@gmail.com</span> | Mobile: (+880) 1305256024</p>
                    <p className="text-sm md:text-[16px]">Address: Dhaka, Bangladesh</p>
                    <div>
                        <Link className='text-sky-700 underline' href={"https://yeasin-portfolio.vercel.app"}>Personal Website</Link> | <Link className='text-sky-700 underline' href={"https://linkedin.com/in/mohammed-yeasin-dev"}>LinkedIn</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali"}>Github</Link>
                    </div>
                </div>

                <h2 className='text-lg md:text-xl mt-4'>Skills</h2><hr />
                <ul className='mt-4 ml-8'>
                    <li className='text-sm md:text-[16px] mb-2 md:mb-0' style={{ listStyle: 'inside' }}>Proficient: JavaScript, ReactJS, HTML, CSS, Bootstrap, Tailwind, Flowbite</li>
                    <li className='text-sm md:text-[16px] mb-2 md:mb-0' style={{ listStyle: 'inside' }}>Familiar: Material UI, Firebase (Auth, Storage, FirestoreDB), NodeJS, MongoDB, ExpressJS, Stripe Payment</li>
                    <li className='text-sm md:text-[16px] mb-2 md:mb-0' style={{ listStyle: 'inside' }}>Tools: Git, VS Code, Chrome Dev Tools, Netlify, Vercel, Figma, NPM</li>
                    <li className='text-sm md:text-[16px]' style={{ listStyle: 'inside' }}>Soft skills: Adaptability, Detail-oriented, Quick learner, Teamwork</li>
                </ul>

                <h2 className='text-lg md:text-xl mt-4'>Practice Projects</h2><hr />
                <div className='mt-4'>
                    <h5><span className='font-bold'>Smart HR</span> - Employee Management Website (MERN)</h5>
                    <div className='text-sm md:text-[16px]'>
                        <Link className='text-sky-700 underline' href={"https://smart-hr-site.web.app"}>Visit website</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/smarthr"}>Front-end Code</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/smarthr-server"}>Back-end code</Link>
                    </div>
                    <p className="text-sm md:text-[16px]">Tech used: Flowbite, React Router Dom, ReactJS, Firebase auth, NodeJS, MongoDB,
                        ExpressJS, Stripe Payment</p>
                </div>
                <div className='mt-4'>
                    <h5><span className='font-bold'>Royella</span> - Hotel Management Website</h5>
                    <div className='text-sm md:text-[16px]'>
                        <Link className='text-sky-700 underline' href={"https://royella-luxury-hotel.web.app"}>Visit website</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/royella"}>Front-end Code</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/royella-server"}>Back-end code</Link>
                    </div>
                    <p className="text-sm md:text-[16px]">Tech used: DaisyUI, React Router Dom, ReactJS, Firebaes auth, NodeJS, MongoDB,
                        ExpressJS, EmailJS, JWT</p>
                </div>
                <div className='mt-4'>
                    <h5><span className='font-bold'>Men Beauty Parlour</span> - Parlour Management Website</h5>
                    <div className='text-sm md:text-[16px]'>
                        <Link className='text-sky-700 underline' href={"https://men-beauty-parlour.web.app"}>Visit website</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/men-beauty-parlour"}>Front-end Code</Link> | <Link className='text-sky-700 underline' href={"https://github.com/yeasinbinali/men-beauty-server"}>Back-end code</Link>
                    </div>
                    <p className="text-sm md:text-[16px]">Tech used: DaisyUI, React Router Dom, ReactJS, Firebase auth, NodeJS, MongoDB,
                        ExpressJS, Stripe payment</p>
                </div>

                <h2 className='text-lg md:text-xl mt-4'>Education</h2><hr />
                <p className='mt-4 font-bold text-sm md:text-[16px]'>University of Dhaka</p>
                <p className="text-sm md:text-[16px]">September 2022 to Present | BBA in Management Information Systems (MIS)</p>

                <h2 className='text-lg md:text-xl mt-4'>Language</h2><hr />
                <p className='mt-4 text-sm md:text-[16px]'>English (comfortable), Bengali (Native), Hindi (listen & speak)</p>
            </div>
            <div className='mt-10'>
                <Link href={"https://drive.google.com/file/d/141JQEntD8l6eaRKkLqiRR51Fz0p_nxJd/view"} ><Button name={"Download"}></Button></Link>
            </div>
        </div>
    );
};

export default resume;