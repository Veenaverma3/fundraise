import { useRef, useState } from "react";
import img1 from "./images/webStep1.png";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FundRaiseForm = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const pictureRef = useRef()
    const documentsRef = useRef()
    const [data, setData] = useState({
        title: '',
        description: '',
        targetAmount: '',
        medical_issue: '',
        bankAccountNumber: '',
        ifcCode: ''
    })
    const [file, setFile] = useState({
        picture: '',
        documents: ''
    })

    const handleTextData = (e) => {
        const fieldName = e.target.name;
        setData({ ...data, [fieldName]: e.target.value })
    }

    const handleFileData = (e) => {
        const fieldName = e.target.name;
        setFile({ ...file, [fieldName]: e.target.files[0] });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        console.log(file);

        // validation conditions
        if (!data.title || !data.description || !data.bankAccountNumber || !data.ifcCode || !data.medical_issue || !data.targetAmount || !file.documents || !file.picture) {
            toast.error("All Fields are required")
            return;
        }

        const formData = new FormData();
        formData.append("title", data.title)
        formData.append("description", data.description)
        formData.append("targetAmount", data.targetAmount)
        formData.append("medical_issue", data.medical_issue)
        formData.append("bankAccountNumber", data.bankAccountNumber)
        formData.append("ifcCode", data.ifcCode)
        formData.append("picture", file.picture)
        formData.append("documents", file.documents)

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/campaign/add", formData, { withCredentials: true })

            if (res.data.success) {
                toast.success(res.data.message);
                setData({
                    title: '',
                    description: '',
                    targetAmount: '',
                    medical_issue: '',
                    bankAccountNumber: '',
                    ifcCode: '',
                })

                setFile({
                    picture: null,
                    documents: null
                })
                // clear the input file type from frontend (not remove directly to clear the setFile value like text input fields)
                document.getElementById("picture").value = "";
                document.getElementById("documents").value = "";
                navigate("/")
            }
        } catch (error) {
            console.log("Error in userSignup:", error)
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-around p-4 md:p-8 mt-[10vh]">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center " >
                    Enter your Details for Raise Fund
                </h2>
                <form className="space-y-6">

                    <input type="text" name="title" placeholder="Title . . ." onChange={(e) => handleTextData(e)} value={data.title}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <textarea name="description" placeholder="Description . . ." onChange={(e) => handleTextData(e)} value={data.description}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="text" name="targetAmount" placeholder="Target Amount . . ." onChange={(e) => handleTextData(e)} value={data.targetAmount}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="text" name="medical_issue" placeholder="Medical Issue . . ." onChange={(e) => handleTextData(e)} value={data.medical_issue}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="text" name="bankAccountNumber" placeholder="Bank Account Number . . ." onChange={(e) => handleTextData(e)} value={data.bankAccountNumber}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="text" name="ifcCode" placeholder="IFC Code . . ." onChange={(e) => handleTextData(e)} value={data.ifcCode}
                        className="font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 mt-2" />

                    <input type="file" ref={pictureRef} name="picture" id="picture" onChange={(e) => handleFileData(e)} hidden />
                    <input type="file" ref={documentsRef} name="documents" id="documents" onChange={(e) => handleFileData(e)} hidden />

                    <section className="flex justify-center items-center w-full gap-4">
                        <span onClick={() => pictureRef.current.click()} className="cursor-pointer text-center px-5 py-2 bg-green-400 hover:bg-green-500 rounded text-white font-medium">Upload Picture</span>
                        <span onClick={() => documentsRef.current.click()} className="cursor-pointer text-center px-5 py-2 bg-green-400 hover:bg-green-500 rounded text-white font-medium">Upload Document</span>
                    </section>
                    {
                        loading ?
                            <button className="flex justify-center items-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none ">
                                <span className="animate-spin"><Loader /></span> Loading . . .
                            </button> :
                            <button type="submit" onClick={(e) => handleSubmit(e)}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none ">
                                Submit Details
                            </button>
                    }
                </form>
            </div>
        </div>
    );
};

export default FundRaiseForm;
