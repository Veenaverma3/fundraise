 import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-8 py-2 text-lg font-medium'>
                <h1 className='cursor-pointer hover:text-gray-500'>Logo</h1>
                <div className='flex space-x-10'>
                    <span className='cursor-pointer hover:text-gray-500'>Home</span>
                    <span className='cursor-pointer hover:text-gray-500'>About</span>
                    <span className='cursor-pointer hover:text-gray-500'>Contact</span>
                </div>
                <div className='flex space-x-5'>
                    <span className='cursor-pointer text-base hover:bg-gray-300 bg-gray-200 px-3 py-1 rounded '>Start a FoundRaise</span>
                    <span className='cursor-pointer hover:text-gray-500'>Sigin</span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar