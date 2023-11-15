import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast';
import { createAccount } from "../Redux/Slices/AuthSlice";

function Signup(){

    const dispatch=useDispatch();

    const navigate=useNavigate();

    const [previewImage,setPreviewImage]=useState("");
    const [signupData,setSignupData]=useState({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    });

    function handleUserInput(e){
        const {name,value}=e.target;
        setSignupData({
            ...signupData,
            [name]:value
        })
    }

    function getImage(event){
        event.preventDefault();
        //getting the image
       const uploadedImage=event.target.file[0];

       if(uploadedImage){
        setSignupData({
            signupData,
            avatar:uploadedImage
        });
        const fileReader= new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load",function () {
            console.log(this.result);
            setPreviewImage(this.result);
        })
       }

    }

   async function createNewAccount(event){
        event.preventDefault();
       if(!signupData.email || !signupData.password || signupData.fullName || signupData.avatar){
        toast.error("Please fill all the deaitls");
        return;
       }
            
            //Checking name field length

        if(signupData.fullName.length < 5){
            toast.error("Name should be atleast of % characters")
        }

            //checking the valid email

        if(!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        toast.error( "Invalid Email ID");
        return;
    }
    //checking password validation

    // This regular expression enforces the following criteria for a strong password:

    //        At least 8 characters long
    //        Contains at least one uppercase letter
    //        Contains at least one lowercase letter
    //        Contains at least one digit
    //        Contains at least one special character from @$!%*#?&

    if(!signupData.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ )){
        toast.error("Passwrod should be 8 Characters long At Least one uppercase, lowercase latter ,one digit and special character [ @$!%*#?&]");
        return;
    }
    const fromData=new FormData();
    fromData.append("fullName",signupData.fullName);
    fromData.append("email",signupData.email);
    fromData.append("password",signupData.password);
    fromData.append("avatar",signupData.avatar);

    //dispatech create account action
const response = await dispatch(createAccount(fromData));
// console.log(response);
if(response?.payload?.success)
      navigate("/");
      setSignupData({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    });
    setPreviewImage("");
}
return(
   
    <HomeLayout>
        <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
                <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                         <h1 className="text-center text-2xl font-bold">Registration Page</h1>
                         <label htmlFor="image_uploads" className="cursor-pointer">
                            {previewImage ? (
                                <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                            ):(
                                <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                            )}
                         </label>
                         <input
                            onChange={getImage}
                            className="hidden"
                            type="file"
                            name="image_uploads"
                            id="image_uploads"
                            accept=".jpg, .jpeg, .pngs, .svg"

                         />
                           <div className="flex flex-col gap-1">
                         <label htmlFor="fulName" className="font-semibold "> Name</label>
                                <input 
                                
                                 type="text"
                                 required
                                 name="fullName"
                                 id="fullName"
                                 placeholder="Enter Your Name.."
                                className="bg-transparet px-2 py-1 border"
                               onChange={handleUserInput}
                               value={signupData.fullName}
                                 /> 
                                </div>
                         <div className="flex flex-col gap-1">
                         <label htmlFor="email" className="font-semibold "> Email</label>
                                <input 
                                
                                 type="email"
                                 required
                                 name="email"
                                 id="email"
                                 placeholder="Enter Your Email.."
                                className="bg-transparet px-2 py-1 border"
                               onChange={handleUserInput}
                               value={signupData.email}
                                 /> 
                                </div>
                                <div className="flex flex-col gap-1">
                                 <label htmlFor="password" className="font-semibold "> Password</label>
                                <input 
                                
                                 type="password"
                                 required
                                 name="password"
                                 id="password"
                                 placeholder="Enter Your Password.."
                                className="bg-transparet px-2 py-1 border"
                                onChange={handleUserInput}
                                value={signupData.password}
                                 /> 
                         </div>
                         <button type="submit" className="m-2 bg-yellow-600 hover : bg-yellow-500 transition-all ease-in-out duration-300 roubded-sm py-2 font-semibold  text-lg curser-pointer">
                            Create account
                         </button>

                       <p className="text-center">
                       Already Have An Account ? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                       </p>  
                </form>
        </div>
    </HomeLayout>
)
    }
export default Signup;