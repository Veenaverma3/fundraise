import { useEffect, useState } from "react";
import man from "./images/div1img.avif";
import plus from "./images/div2img.avif";
import child from "./images/div3img.avif";
import profile from "./images/profile.png";
import { HeartIcon, Clock } from "lucide-react";
import axios from "axios";

const Activefund = () => {
  const activedata = [
    {
      img: man,
      h1: "I Need Your Urgent Support For My Brain haemorrhage Treatment",
      image: profile,
      by: "by Sukhvinder Singh Hansi",
      rate: "1,54,599",
      out: "raised out of 250,000",
      last: "Last donation an hour ago",
      icon: <Clock className="w-5 h-5 mr-2" />,
      ago: "45 days ago",
      ic: <HeartIcon className="h-6 w-6 text-red-500" />,
      num: "222",
      Support: "Supporters",
    },
    {
      img: plus,
      h1: "Support for Garvit Sharma's Critical Treatment After Tragic Accident",
      image: profile,
      by: "by Mukti Sharma",
      rate: "1,54,599",
      out: "raised out of 250,000",
      last: "Last donation an hour ago",
      icon: <Clock className="w-5 h-5 mr-2" />,
      ago: "45 days ago",
      ic: <HeartIcon className="h-6 w-6 text-red-500" />,
      num: "222",
      Support: "Supporters",
    },
    {
      img: child,
      h1: "Mast. Abhyang Oswal Is Looking For Your Help",
      image: profile,
      by: "by Save Tears Foundation",
      rate: "1,54,599",
      out: "raised out of 250,000",
      last: "Last donation an hour ago",
      icon: <Clock className="w-5 h-5 mr-2" />,
      ago: "45 days ago",
      ic: <HeartIcon className="h-6 w-6 text-red-500" />,
      num: "222",
      Support: "Supporters",
    },
  ];
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/campaign/getAll");
        console.log("res is", res);
        if (res.data.success) {
          setData(res.data.campaigns)
          console.log("data is :", data)

        }
      } catch (error) {
        console.log("error in res", error);
      }
    };
    fetchData();
  }, [])

  return (
    <div className="px-4 mx-[5vw] mb-20">
      <h1 className="text-3xl md:text-5xl text-center font-serif font-bold mt-10 md:mt-28">
        Active Fundraise
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
        {
          data.length > 0 &&
          data.map((item, index) => {
            return <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl border flex flex-col w-full max-w-sm mx-auto"
            >
              <img
                src={item?.picture}
                alt="Fundraiser"
                className="w-full h-60 sm:h-72 object-cover"
              />
              <div className="p-4 flex-1">
                <h1 className="font-bold text-lg">{item.title}</h1>
                {/* {item.image && ( */}
                <img
                  src={profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover mb-4"
                />
                {/* )} */}
                <p className="text-gray-500 ml-14 -mt-10">by {item.user.name}</p>

                {/* {item.rate && ( */}
                <div className="mt-2">
                  <p className="font-semibold">
                    {item.currentAmount}{" "}
                    <span className="text-gray-500">raised out of {item.targetAmount}</span>
                  </p>
                </div>
                {/* )} */}
                {/* {item.last && ( */}
                <div className="absolute bottom-5 left-2 flex items-center text-gray-500">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45 days ago</span>
                </div>
                {/* )} */}
                <div className="flex items-center justify-end mt-4 text-gray-500">
                  <HeartIcon className="h-6 w-6 text-red-500" />
                  <span className="ml-2 font-semibold">
                    {item.whoDonated.length} Supporters
                  </span>
                </div>
              </div>
            </div>
          })
        }

      </div>
    </div>
  );
};

export default Activefund;
