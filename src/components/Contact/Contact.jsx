"use client"
import React from 'react';
import HeaderName from '../HeaderName/HeaderName';
import './Contact.css';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

        emailjs
            .sendForm(serviceId, templateId, e.target, publicKey)
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.text}`
                    });
                }
            );
    };

    return (
        <div className='mb-20'>
            <HeaderName name={"Send me a message"} />
            <form className="form w-[85%] md:w-[50%] mx-auto bg-sky-50" onSubmit={handleSubmit}>
                <div className="input-container w-[85%] md:w-[50%] mx-auto ic1">
                    <input id="name" className="input" type="text" placeholder=" " name="name" required />
                    <div className="cut w-[25%] lg:w-[15%]"></div>
                    <label htmlFor="name" className="placeholder">Your Name</label>
                </div>
                <div className="input-container w-[85%] md:w-[50%] mx-auto ic2">
                    <input id="email" className="input" type="email" placeholder=" " name="email" required />
                    <div className="cut w-[25%] lg:w-[15%]"></div>
                    <label htmlFor="email" className="placeholder">Email</label>
                </div>
                <div className="textarea-container w-[85%] md:w-[50%] mx-auto ic2">
                    <textarea id="message" className="input" placeholder=" " name="message" required />
                    <div className="cut w-[25%] lg:w-[15%]"></div>
                    <label htmlFor="message" className="placeholder">Message</label>
                </div>
                <div className='mt-5'>
                    <Button type="submit" name={"Submit"} />
                </div>
            </form>
        </div>
    );
};

export default Contact;
