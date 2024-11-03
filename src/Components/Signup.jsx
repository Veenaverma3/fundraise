import { useState } from "react";
import img1 from "./images/webStep1.png";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })

    const handleData = (e) => {
        const fieldName = e.target.name;
        setData({ ...data, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);

        // validation conditions
        if (!data.name || !data.email || !data.phone || !data.confirmPassword || !data.password) {
            toast.error("All Fields are required")
            return;
        } else if (data.password.length < 6) {
            toast.error("Password must be of 6 Char")
            return;
        } else if (data.password !== data.confirmPassword) {
            toast.error("Password and Confirm Password is not same")
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/user/signup", data, { withCredentials: true })

            if (res.data.success) {
                toast.success(res.data.message);
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                })
            }
        } catch (error) {
            console.log("Error in userSignup:", error)
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-around p-4 md:p-8 mt-[13vh]">
            {/* Left Section (Image + Heading) */}
            <div className="text-left mb-8 md:mb-0 md:w-1/2">
                <img
                    src={img1}
                    alt="Raising Funds"
                    className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
                />
                <h1 className="text-xl md:text-2xl font-semibold mt-4 text-center md:text-left">
                    Thousands Are Raising Funds
                    <br /> Online On Logo
                </h1>
                <h1 className="text-xl md:text-3xl font-bold mt-2 text-center md:text-left">
                    You Can Too
                </h1>
            </div>

            {/* Right Section (Form) */}
            <div className="w-full md:w-1/2 max-w-xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Enter your Basic Details for Signup First
                </h2>
                <form className="space-y-6">
                    <input type="text" name="name" placeholder="Name . . ." onChange={(e) => handleData(e)} value={data.name}
                        className="text-center font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="email" name="email" placeholder="Email . . ." onChange={(e) => handleData(e)} value={data.email}
                        className="text-center font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="text" name="phone" placeholder="Phone Number . . ." onChange={(e) => handleData(e)} value={data.phone}
                        className="text-center font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="password" name="password" placeholder="Password . . ." onChange={(e) => handleData(e)} value={data.password}
                        className="text-center font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="password" name="confirmPassword" placeholder="Confirm Password . . ." onChange={(e) => handleData(e)} value={data.confirmPassword}
                        className="text-center font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    {
                        loading ?
                            <button className="flex justify-center items-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none ">
                                <span className="animate-spin"><Loader /></span> Loading . . .
                            </button> :
                            <button type="submit" onClick={(e) => handleSubmit(e)}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none ">
                                Verify By Email
                            </button>
                    }
                </form>
                <span className="block mt-2 text-center text-sm">Already have an account ? <span onClick={() => navigate('/signin')} className="text-blue-400 hover:underline cursor-pointer">signIn</span></span>
            </div>
        </div>
    );
};

export default Signup;
