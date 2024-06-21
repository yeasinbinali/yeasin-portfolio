import React, { useState } from 'react';
import Button from '../Button/Button';

const Project = ({ project }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    console.log(project);
    const { name, description, image, technologies, live_site, frontend_code, backend_code } = project;

    return (
        <div className="relative max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10">
            <img src={image} alt="img" className='brightness-50' />
            <div className="px-6 py-4 border-t absolute right-10 bottom-10">
                <button
                    // id='glow-on-hover'
                    className='glow-on-hover flex justify-center items-center'
                    // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
                <div className="relative p-6 bg-sky-50 h-full">
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        onClick={closeDrawer}
                    >
                        &times;
                    </button>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='text-xl my-3'>Features :</p>
                    <ul className='ml-3'>
                        {description.map((des, index) => <li className='mb-1' key={index}>&#x2022; {des}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        // <div className='mb-10 relative'>
        //     <img src={image} alt="img" className='brightness-50' />
        // </div>
    );
};

export default Project;