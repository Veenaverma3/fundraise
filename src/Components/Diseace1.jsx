import React from 'react'
import Navbar from './Navbar'

const Diseace1 = () => {
    return (
        <>
            <Navbar />
            <div className='mx-[5vw]'>
                <h1 className='text-center font-medium text-3xl text-gray-500 mt-5'>Open Heart Surgery</h1>

                <div>
                    <span className='text-xl font-medium'>Introduction</span>
                    <p>
                        Open heart surgery is a critical procedure performed to address various heart conditions. This surgery allows surgeons to directly access the heart, enabling them to repair or replace damaged structures, such as valves or arteries.
                    </p>
                </div>

                <div>
                    <span className='text-xl font-medium'>Why Open Heart Surgery?</span>
                    <p>Open heart surgery is typically recommended for:</p>
                    <ul className=' list-disc'>
                        <li ><span>Coronary Artery Disease: </span> Bypass blocked arteries to restore blood flow.</li>
                        <li><span>Heart Valve Disease: </span> Repair or replace malfunctioning valves</li>
                        <li><span>Congenital Heart Defects: </span> Correct structural heart issues present at birth.</li>
                        <li><span>Aneurysms: </span> Repair weakened areas of the heart or aorta.</li>
                    </ul>
                </div>

                {/* <div>
                    <span>The Procedure</span>
                    <ol>
                        <li>
                            Preoperative Preparation
                            <ul>
                                <li>Comprehensive evaluations, including blood tests, imaging studies, and consultations.</li>
                                <li>Discussion of risks and benefits.</li>
                            </ul>
                        </li>
                    </ol>
                </div> */}
            </div>
        </>

    )
}

export default Diseace1