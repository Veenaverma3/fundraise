import heart from "./images/hert.png";
import kidney from "./images/kidny.png";
import baby from "./images/baby.png";
import bone from "./images/bone.png";
import cancer from "./images/cancer.png";
import any from "./images/any other.png";

const Forraisefund = () => {
    const datas = [
        {
            img: heart,
            name: "Open Heart Surgery"
        },
        {
            img: kidney,
            name: "Kidney Transplant"
        },
        {
            img: baby,
            name: "NICU Care"
        },
        {
            img: bone,
            name: "Bone Marrow Transplant"
        },
        {
            img: cancer,
            name: "Cancer Treatment"
        },
        {
            img: any,
            name: "Any Other Disease"
        },
    ];

    return (
        <div className="p-5">
            <div className="mb-5">
                <h1 className="text-4xl md:text-5xl font-serif text-center mt-14">
                    What medical treatments can you raise<br />
                    <span className="mt-4 block">funds for?</span>
                </h1>
            </div>
            <div className="flex flex-wrap gap-6 mt-20 mb-14 justify-center">
                {datas.map((item, index) => (
                    <div 
                        key={index} 
                        className="border rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg w-56 h-56 flex flex-col items-center bg-gray-200"
                    >
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-24 h-24 mb-2 object-cover rounded-full" 
                        />
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forraisefund;
