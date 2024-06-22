import React, { useEffect, useState } from 'react';
import HeaderName from '../HeaderName/HeaderName';
import axios from 'axios';
import Project from '../Project/Project';
import Button from '../Button/Button';
import Link from 'next/link';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('projects.json')
            .then(res => {
                setProjects(res.data);
            })
    }, [])

    return (
        <div className='mb-20'>
            <HeaderName name={"Some thing I've built"}></HeaderName>
            <div>
                {projects.slice(0, 3).map(project => <Project key={project.id} project={project}></Project>)}
            </div>
            <Link href={"All Projects"}><Button name={"View More Projects"}></Button></Link>
        </div>
    );
};

export default Projects;