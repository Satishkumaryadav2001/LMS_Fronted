import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import HomePageImage from "../assets/Image/lms-3.jpg";

import HomePageVideo from "../assets/Video/LMS_HomePage.mp4";


function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                   <div className="w-1/2 space-y-6">
                       <h1 className="text-5xl front-semibold">
                        Find out Best
                        <span className="text-yellow-500 font-bold">
                                    Online Courses
                        </span>
                       </h1>
                       <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable rate cost.
                       </p>
                       <div className="space-x-6">
                           <Link to="/courses">
                                       <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration 38">
                                                  Explore  courses
                                       </button>
                           </Link>
                           <Link to="/contact">
                                       <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration 38">
                                                  Contact Us
                                       </button>
                           </Link>
                       </div>
                   </div>
                   <div className="w-1/2 flex items-center justify-center">
                        <img alt="Home pageimage " src={HomePageImage} />
                        
                        {/* <video src={HomePageVideo} autoPlay controls height="1000px" width="1000px" loop/> */}
                   </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;