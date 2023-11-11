import HomeLayout from "../Layouts/HomeLayout";
import AboutMainImage from '../assets/Image/lms-4.jpg';
import Carsousel_l from '../assets/Image/carousel-1.avif';
import Carsousel_2 from '../assets/Image/carousel-2.avif';
import Carsousel_3 from '../assets/Image/carousel-3.avif';
import Carsousel_4 from '../assets/Image/carousel-4.avif';
import Carsousel_5 from '../assets/Image/carousel-5.avif';
import Carsousel_6 from '../assets/Image/carousel-6.avif';
import Carsousel_7 from '../assets/Image/carousel-7.avif';
import Carsousel_8 from '../assets/Image/carousel-8.avif';
import Carsousel_9 from '../assets/Image/carousel-9.avif';
import Carsousel_10 from '../assets/Image/carousel-10.avif';

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
                              <div id="slide1" className="carousel-item relative w-full">
                                 <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                                   <img src={Carsousel_l} className="w-45 rounded-full border-2 border-gray-400"/>
                                   <p className="text-xl text-green-500">To me there is only one answer to this questions. That answer is not that you should shut yourselves in colleges and learn history and mathematics while the country is on fire and everybody is fighting freedom's battle. Your place is by the side of your countrymen, who are fighting the freedom's battle.</p>

                                   <h3 className="text-2xl font-semibold">-:- Sardar Vallabhai Patel</h3>
                                    <div className="absolute w-[70%] flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                          <a href="#slide10" className="btn btn-circle">❮</a> 
                                          <a href="#slide2" className="btn btn-circle">❯</a>
                                     </div>
                                   </div>
                              </div>

                              <div id="slide2" className="carousel-item relative w-full">
                                 <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                                 <img src={Carsousel_2} className="w-45 rounded-full border-2 border-gray-400" />
                                          <p className="text-xl text-green-500">"Literacy in itself is no education. Literacy is not the end of education or even the beginning. By education I mean an all-round drawing out of the best in the child and man-body, mind and spirit."</p>

                                       <h3 className="text-2xl font-semibold">-:- Mohandas Karamchand Gandhi</h3>
                                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                           <a href="#slide1" className="btn btn-circle">❮</a> 
                                           <a href="#slide3" className="btn btn-circle">❯</a>
                                     </div>
                                 </div>
                             </div>
                               
                             <div id="slide3" className="carousel-item relative w-full">
                              <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                              <img src={Carsousel_3} className="w-45 rounded-full border-2 border-gray-400" />
                                        <p className="text-xl text-green-500">Educationists should build the capacities of the spirit of inquiry, creativity, entrepreneurial and moral leadership among students and become their role model.</p>

                                            <h3 className="text-2xl font-semibold">-:- Dr. A.P.J. Abdul Kalam</h3>
                                      <div className="absolute w-[90%]  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                           <a href="#slide2" className="btn btn-circle">❮</a> 
                                          <a href="#slide4" className="btn btn-circle">❯</a>
                                     </div>
                              </div>
                             </div>

                            <div id="slide4" className="carousel-item relative w-full">
                              <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                              <img src={Carsousel_4} className="w-45 rounded-full border-2 border-gray-400" />
                                          <p className="text-xl text-green-500">“The progress of any society depends on the progress of education in that society” “Knowledge is the basis of human life. To enhance the intellectual capacity of the students; Also, every effort should be made to increase their intelligence”. “You got educated doesn't mean everything is done."</p>

                                            <h3 className="text-2xl font-semibold">-:- Dr B R Ambedkar</h3>
                                    <div className="absolute w-[85%]  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                         <a href="#slide3" className="btn btn-circle">❮</a> 
                                         <a href="#slide5" className="btn btn-circle">❯</a>
                                  </div>
                              </div>
                            </div>
              
                           <div id="slide5" className="carousel-item relative w-full">
                            <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                            <img src={Carsousel_5} className="w-45 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-green-500">“Your belief in yourself should always be unshakable, indeed when faced with challenges.”</p>

                                                 <h3 className="text-2xl font-semibold">-:- Khan Sir</h3>
                                  <div className="absolute w-[85%]  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                       <a href="#slide4" className="btn btn-circle">❮</a> 
                                       <a href="#slide6" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                          </div>

                           <div id="slide6" className="carousel-item relative w-full">
                               <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                               <img src={Carsousel_6} className="w-45 rounded-full border-2 border-gray-400" />
                               <p className="text-xl text-green-500">“You might fail a few times, but that’s Ok. You end up doing something worthwhile which you learn a great deal from.”</p>

                                                        <h3 className="text-2xl font-semibold">-:-  Sundar Pichai</h3>
                                   <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle">❮</a> 
                                        <a href="#slide7" className="btn btn-circle">❯</a>
                                 </div>
                               </div>
                         </div>
  
                          <div id="slide7" className="carousel-item relative w-full">
                             <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                             <img src={Carsousel_7} className="w-45 rounded-full border-2 border-gray-400" />
                             <p className="text-xl text-green-500">Kisi bhi competetion k liye ye baat important nhi hoti k aap ne kitni mehnat put in ki...ye baat imp hoti hai k agl bagal wale kitni mehnat kar rahe hain...Bhai ye competetion hai ...ye competetion hai tu 6 kar raha hai udhar jhank k dekh wo 12 wo 18 udhar jhank kr dekh 12 with planning udhar jhank kr dekh 14 ghante with planning r tu apne aap ko dekh unmanaged 6 ghante alternate day pr ...kaise hoga selection.</p>

                                       <h3 className="text-2xl font-semibold">-:-Alakh Pandey sir</h3>
                                  <div className="absolute w-[95%]  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                      <a href="#slide6" className="btn btn-circle">❮</a> 
                                      <a href="#slide8" className="btn btn-circle">❯</a>
                               </div>
                             </div>
                         </div>
                                
                         <div id="slide8" className="carousel-item relative w-full">
                               <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                               <img src={Carsousel_8} className="w-45 rounded-full border-2 border-gray-400" />
                               <p className="text-xl text-green-500">Make yourself strong, mind and body, this will help you win in the battle of life.</p>

                                                                        <h3 className="text-2xl font-semibold">-:- Ojha Sir</h3>
                                  <div className="absolute w-[90%]  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                       <a href="#slide7" className="btn btn-circle">❮</a> 
                                       <a href="#slide9" className="btn btn-circle">❯</a>
                                </div>
                               </div>
                        </div>
                                 
                        <div id="slide9" className="carousel-item relative w-full">
                            <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                            <img src={Carsousel_9} className="w-45 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-green-500">"
                                                                                                                                                                   What is called the world is a magic toy, what is found is clay, what is not found is gold."</p>

                                                                <h3 className="text-2xl font-semibold">-:- Vikas divyakirti</h3>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                     <a href="#slide8" className="btn btn-circle">❮</a> 
                                     <a href="#slide10" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                       </div>
                      
                       <div id="slide10" className="carousel-item relative w-full">
                           <div className="flexflex-col items-center justify-center gap-4 px-[15%]">
                           <img src={Carsousel_10} className="w-45 rounded-full border-2 border-gray-400"/>
                           <p className="text-xl text-green-500">“I have three dogs at home. Even after losing a series or winning a series, they treat me the same way.”  </p>

                                    <h3 className="text-2xl font-semibold">-:- MS Dhoni </h3>
                                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide9" className="btn btn-circle">❮</a> 
                                        <a href="#slide1" className="btn btn-circle">❯</a>
                                  </div>
                           </div>
                      </div>
  
               </div>

         </div>
        </HomeLayout>
    )

}
export default AboutUs;