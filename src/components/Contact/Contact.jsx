import React from 'react';
import HeaderName from '../HeaderName/HeaderName';
import './Contact.css';
import Button from '../Button/Button';

const Contact = () => {

    return (
        <div className='mb-20'>
            <HeaderName name={"Sent me a message"}></HeaderName>
            <div className="form w-[50%] mx-auto bg-sky-50">
                <div className="input-container w-[50%] mx-auto ic1">
                    <input id="name" className="input" type="text" placeholder=" " />
                    <div className="cut w-[15%]"></div>
                    <label for="name" className="placeholder">Your Name</label>
                </div>
                <div className="input-container w-[50%] mx-auto ic2">
                    <input id="email" className="input" type="text" placeholder=" " />
                    <div className="cut w-[15%]"></div>
                    <label for="email" className="placeholder">Email</label>
                </div>
                <div className="textarea-container w-[50%] mx-auto ic2">
                    <textarea id="message" className="input" type="text" placeholder=" " />
                    <div className="cut w-[15%]"></div>
                    <label for="message" className="placeholder">Message</label>
                </div>
                <div className='w-full mt-5'>
                    <Button name={"Submit"}></Button>
                </div>
                {/* <button type="text" className="submit">submit</button> */}
            </div>
        </div>
    );
};

export default Contact;