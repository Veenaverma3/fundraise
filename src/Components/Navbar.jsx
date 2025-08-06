   import logo from "../Components/images/logo-light-bg.svg"
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"; // Ensure the path is correct
import Raisefundform2 from "./Raisefundform2";
import { Cross2Icon } from "@radix-ui/react-icons"; // Ensure this import is available

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-8 py-2 text-lg font-medium fixed top-0 z-10 left-0 right-0 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg'>
              <Link to="/" className="cursor-pointer hover:opacity-80 transition duration-200">
  <img
    src={logo}
    alt="logo"
    className="h-10 w-auto object-contain"
  />
</Link>

                <div className='flex space-x-10'>
                    <span className='cursor-pointer hover:text-gray-500'>
                        <Link to="/">Home</Link>
                    </span>
                    <span className='cursor-pointer hover:text-gray-500'>
                        <Link to="/about">About</Link>
                    </span>
                    <span className='cursor-pointer hover:text-gray-500'>
                        <Link to="/contact">Contact</Link>
                    </span>
                </div>
                <div className='flex space-x-5'>
                    <span className='cursor-pointer text-white text-sm hover:bg-teal-400 bg-teal-300 px-3 py-1 rounded-2xl border-2 border-gray-400 hover:border-gray-500'>
                        <Link to="/fund">Start a FundRaise</Link>
                    </span>
                    <Dialog>
                        <DialogTrigger>
                            <span className='cursor-pointer hover:text-gray-500'>Signin</span>
                        </DialogTrigger>
                        <DialogContent className="max-h-[100vh] p-0 m-0">
                            <DialogTitle>Sign In</DialogTitle>
                            <DialogDescription>
                                Please enter your credentials to sign in.
                            </DialogDescription>
                            <Raisefundform2 />
                            <DialogClose className="absolute right-4 top-4">
                                <Cross2Icon />
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Navbar;

