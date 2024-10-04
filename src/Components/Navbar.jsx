 import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-8 py-2'>
                <h1 className='cursor-pointer hover:underline'>Logo</h1>
                <div className='flex space-x-10'>
                    <span className='cursor-pointer hover:underline'>Home</span>
                    <span className='cursor-pointer hover:underline'>About</span>
                    <span className='cursor-pointer hover:underline'>Contact</span>
                </div>
                <div className='flex space-x-5'>
                    <Link to="/raiser" className='cursor-pointer text-sm hover:bg-gray-300 font-medium bg-gray-200 px-3 py-1 rounded '>Start a FoundRaise</Link>
                    <span className='cursor-pointer hover:underline'>Sigin</span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar