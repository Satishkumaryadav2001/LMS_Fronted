import HomeLayout from "../Layouts/HomeLayout";
import AboutMainImage from '../assets/Image/lms-4.jpg';
import { celebrities } from "../Constants/CelebrityData";
import CarsouselSlide from "../Components/CarouselSlide";

function AboutUs(){



    return(
        <HomeLayout>
         <div className="pl-20 pt-20 flex flex-col text-white">
                 <div className="flex item-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                       <h1 className="text-5xl text-yellow-500 font-semobold">Affordable and quality education</h1>
                    
                       <p className="text-xl text-gray-200">
                        Our gaol to provide the affordable and quality education to the world.
                        We are providing the platfrom for the aspiring teacher and students to share 
                        their skills, creativity and knowledge to each other to empower and contribute
                        in the growth and wellness of mankind.
                       </p>
                    </section>

                    <div className="w-1/2">
                              <img
                              id="test1"
                              style={{
                                filter: "drop-shadow(0px,10px,10px rgb(0,0,0));"
                              
                              }}
                                alt="About main image"
                              className="drop-shadow-2xl"
                                src={AboutMainImage}
                              />
                    </div>
                 </div> 

               <div className="carousel w-1/2 my-16 m-auto">
               {celebrities && celebrities.map(celebrity => (<CarsouselSlide
                                                            {...celebrity}
                                                             key ={celebrity.slideNumber}
                                                              totalSlides={celebrities.length}
                                                               />))}
               <CarsouselSlide/>
                     
  
               </div>

         </div>
        </HomeLayout>
    )

}
export default AboutUs;