import React, { useState } from 'react';
import Button from '../Button/Button';
import Link from 'next/link';

const Project = ({ project }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const { name, description, image, technologies, live_site, frontend_code, backend_code } = project;

    return (
        <div className="relative max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10">
            <img src={image} alt="img" className='brightness-50' />
            <div className="px-6 py-4 absolute right-0 md:right-10 bottom-0 md:bottom-10">
                <button
                    className='glow-on-hover flex justify-center items-center'
                    onClick={toggleDrawer}
                >
                    {isDrawerOpen ? 'Close Details' : 'Full Details'}
                </button>
            </div>
            <div
                className={`absolute top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                style={{ width: "50%" }}
            >
                <div className="relative p-2 md:p-5 bg-sky-50 h-full overflow-x-auto md:overflow-x-hidden">
                    <button
                        className="absolute top-2 right-2 bg-main text-white rounded-full p-1 hover:bg-sky-600"
                        onClick={closeDrawer}
                    >
                        &times;
                    </button>
                    <div>
                        <div>
                            <h1 className='text-lg md:text-2xl lg:text-3xl font-bold'>{name}</h1>
                            <p className='text-md md:text-xl my-2 md:my-3'>Features :</p>
                            <ul className='md:ml-3'>
                                {description.map((des, index) => <li className='mb-1 text-sm md:text-md' key={index}>&#x2022; {des}</li>)}
                            </ul>
                            <p className='text-md md:text-xl mt-3 mb-3'>Technologies used : </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5'>
                                {technologies.map((technology, index) => <p key={index} className='border-[1px] border-slate-300 text-sm md:text-md flex justify-center'>{technology}</p>)}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 mt-5'>
                            <Link href={live_site}><Button name={"Live Site"}></Button></Link>
                            <Link href={frontend_code}><Button name={"Frontend code"}></Button></Link>
                            {backend_code && <Link href={backend_code}><Button name={"Backend code"}></Button></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;