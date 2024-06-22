"use client"
import React, { useEffect, useState } from 'react';
import HeaderName from '../HeaderName/HeaderName';
import axios from 'axios';
import Project from '../Project/Project';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('projects.json')
            .then(res => {
                setProjects(res.data);
            })
    }, [])

    return (
        <div className='mt-10 mb-20'>
            <HeaderName name={"Some thing I've built"}></HeaderName>
            <div>
                {projects.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
        </div>
    );
};

export default AllProjects;