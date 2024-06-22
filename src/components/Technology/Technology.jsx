"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeaderName from '../HeaderName/HeaderName';

const Technology = () => {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        axios.get('tech.json')
            .then(res => {
                setTechnologies(res.data);
            })
    }, []);


    return (
        <div className='mb-20'>
            <HeaderName name={"Technologies I've been working on"}></HeaderName>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {technologies.map(technology => (
                    <div key={technology.id} className='flex items-center bg-sky-50 justify-center p-5 transition duration-300 ease-in-out hover:scale-110'>
                        <img className='w-10 h-10' src={technology.image} alt="tech" />
                        <h3 className='text-xl ml-5 font-medium'>{technology.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technology;
