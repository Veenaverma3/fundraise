import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Doubts = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const doubtData = [
        {
            Ques: 'What is a virtual reality headset?',
            ans: 'A virtual reality headset is a device that uses computer graphics to create an immersive, 3D environment that you can explore in your own personal space.'
        },
        {
            Ques: 'What is a virtual reality headset?',
            ans: 'A virtual reality headset is a device that uses computer graphics to create an immersive, 3D environment that you can explore in your own personal space.'
        },
        {
            Ques: 'What is a virtual reality headset?',
            ans: 'A virtual reality headset is a device that uses computer graphics to create an immersive, 3D environment that you can explore in your own personal space.'
        },
        {
            Ques: 'What is a virtual reality headset?',
            ans: 'A virtual reality headset is a device that uses computer graphics to create an immersive, 3D environment that you can explore in your own personal space.'
        },
    ]

    const handleToogle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className='bg-[#F5F5F5] py-8 flex flex-col items-center justify-center'>
            <h1 className='text-3xl '>Frequently Asked Questions</h1>
            <div className='bg-yellow-400 w-28 my-5 h-1 rounded-2xl'></div>
            {
                doubtData.map((item, index) => {
                    return (
                        <>
                            <div key={index} className={`w-[50vw] p-3 ml-[10vw] rounded ${openIndex === index ? 'bg-white' : 'bg-transparent hover:bg-[#e9e9e9]'}`}>
                                <div>
                                    <span onClick={() => handleToogle(index)} className='cursor-pointer text-lg items-center flex gap-5'>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}{item.Ques}</span>
                                    <p className={`${openIndex === index ? 'block' : 'hidden'} mt-4 text-sm text-gray-500 pl-[3vw]`}>{item.ans}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default Doubts