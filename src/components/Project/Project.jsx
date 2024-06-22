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
            <div className="px-6 py-4 border-t absolute right-10 bottom-10">
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
                <div className="relative p-5 bg-sky-50 h-full">
                    <button
                        className="absolute top-2 right-2 bg-main text-white rounded-full p-1 hover:bg-sky-600"
                        onClick={closeDrawer}
                    >
                        &times;
                    </button>
                    <div>
                        <div>
                            <h1 className='text-3xl font-bold'>{name}</h1>
                            <p className='text-xl my-3'>Features :</p>
                            <ul className='ml-3'>
                                {description.map((des, index) => <li className='mb-1' key={index}>&#x2022; {des}</li>)}
                            </ul>
                            <p className='text-xl mt-3 mb-3'>Technologies used : </p>
                            <div className='grid grid-cols-3 gap-5'>
                                {technologies.map((technology, index) => <p key={index} className='border-[1px] border-slate-300 flex justify-center'>{technology}</p>)}
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
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