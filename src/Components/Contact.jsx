import React, { useState } from 'react'
import contact from '@/Components/images/contact.jpg'
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaSquareFacebook, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'sonner';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        content: ''
    })

    const handleData = (e) => {
        const fieldName = e.target.name;
        setData({ ...data, [fieldName]: e.target.value })
    }

    const handleSubmit = async () => {
        console.log(data);
        // all fields are required for sending req
        if (!data.name || !data.content || !data.email) {
            toast.error("All fields are required");
            return
        }

        try {
            const res = await axios.post("http://localhost:5000/suggestion/send", data, { withCredentials: true });

            if (res.data.success) {
                toast.success(res.data.message);
                setData({
                    name: '',
                    email: '',
                    content: ''
                })
            }
        } catch (error) {
            console.log("Error in handleSubmit:", error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='relative '>
                <img src={contact} alt="contact" className='h-[93vh] w-full ' />
                <div className='absolute top-[20vh] left-[10vw] max-w-[60vw]'>
                    <h1 className='text-6xl text-white font-bold mb-5'>Contact Us</h1>
                    <p className='text-2xl text-white'>We're here to help you with any questions or concerns you might have. Please don't hesitate to reach out.</p>
                </div>
            </div>
            <p className='my-2 text-xl flex gap-4 items-center justify-center font-medium text-gray-500'>Scroll Down <span className='animate-bounce text-xl'><FaAngleDoubleDown /></span></p>


            <div className='mx-[10vw] mt-10'>
                <h1 className='text-3xl text-gray-700'>Let us know what you think</h1>
                <div className='flex justify-between gap-[5vw] mt-8'>
                    <input type="text" value={data.name} name='name' onChange={(e) => handleData(e)} placeholder='Name' className='w-1/2 border-b-2 focus:border-gray-400 pl-3 text-lg text-gray-400 pb-3 outline-none font-medium' />
                    <input type="text" value={data.email} name='email' onChange={(e) => handleData(e)} placeholder='Email Address' className='w-1/2 border-b-2 focus:border-gray-400 pl-3 text-lg text-gray-400 pb-3 outline-none font-medium' />
                </div>
                <textarea name="content" value={data.content} onChange={(e) => handleData(e)} placeholder='You can type any suggestions or queries you might have. Let us help you!' className='mt-10 w-full text-lg font-medium text-gray-400 outline-gray-400 scrollbar-hidden border-2 border-gray-200 rounded-lg p-3' />
                <button onClick={handleSubmit} className='mt-10 py-2 px-16 text-xl rounded-lg text-white bg-gray-600 hover:bg-black'>Send</button>
            </div>

            <div className='w-full my-[10vh] px-[5vw] py-5 text-white' style={{ backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)' }}>
                <span className='text-xl block mb-5 font-medium'>Join with us on Social media </span>
                <p className=''>Join us on Facebook, Twitter, Instagram and YouTube as we share uplifting stories of successful fundraisers! </p>
                <div className='flex gap-4 mt-3 text-2xl'>
                    <FaSquareFacebook className='cursor-pointer hover:text-gray-400' />
                    <FaXTwitter className='cursor-pointer hover:text-gray-400' />
                    <FaLinkedinIn className='cursor-pointer hover:text-gray-400' />
                    <FaYoutube className='cursor-pointer hover:text-gray-400' />
                    <FaWhatsapp className='cursor-pointer hover:text-gray-400' />
                    <FaInstagram className='cursor-pointer hover:text-gray-400' />
                </div>
            </div>
        </>
    )
}

export default Contact