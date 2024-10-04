import React from 'react'
import { FaInstagram, FaLinkedinIn, FaSquareFacebook, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Fotter = () => {
    return (
        <>
            <div className='flex justify-between py-10 px-[5vw] bg-black text-white'>
                <div>
                    <div>
                        <span>logo</span>
                        <hr className='my-4' />
                        <div className='flex justify-between text-2xl'>
                            <FaSquareFacebook />
                            <FaXTwitter />
                            <FaLinkedinIn />
                            <FaYoutube />
                            <FaWhatsapp />
                            <FaInstagram />
                        </div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <span>For any queries</span>
                            <span>Email: info@example.org</span>
                            <span>Contact No: +91 8950400416</span>
                        </div>
                    </div>
                </div>

                <div>
                    <span className='text-lg font-medium'>Causes</span>
                    <div className='flex flex-col gap-2 mt-4'>
                        <span>Medical crowdfunding</span>
                        <span>Cancer Crowdfunding</span>
                        <span>Transplant</span>
                        <span>Crowdfunding</span>
                        <span>Education</span>
                    </div>
                </div>

                <div>
                    <span className='text-lg font-medium'>About Us</span>
                    <div className='flex flex-col gap-2 mt-4'>
                        <span>Team example</span>
                        <span>In The News</span>
                        <span>Web Stories</span>
                        <span>Careers</span>
                        <span>Ketto Blog</span>
                    </div>
                </div>

                <div>
                    <span className='text-lg font-medium' >Support</span>
                    <div className='flex flex-col gap-2 mt-4'>
                        <span>Medical Finance</span>
                        <span>FAQs & Help Center</span>
                        <span>Genuine?</span>
                        <span>Fundraiser Video</span>
                        <span>Trust & Safety</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='bg-black text-white text-center py-3'>
                <span>2024 example. All rights reserved.</span>
                <span className='ml-5'><span className='cursor-pointer hover:text-gray-500'>Terms & Conditions</span> | <span className='cursor-pointer hover:text-gray-500'>Privacy Policy</span></span>
            </div>
        </>
    )
}

export default Fotter