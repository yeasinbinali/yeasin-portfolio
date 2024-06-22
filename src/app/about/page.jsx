import About from '@/components/About/About';
import Technology from '@/components/Technology/Technology';
import React from 'react';

const about = () => {
    return (
        <div className='mt-10 mb-20'>
            <About></About>
            <Technology></Technology>
        </div>
    );
};

export default about;