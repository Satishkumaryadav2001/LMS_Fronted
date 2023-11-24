import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosintance";

const initialState = {
    courseData:[]
}

export const getAllCoureses=createAsyncThunk("/course/get",async () =>{
try {
    const response = axiosInstance.get("/courses");
    toast.promise(response,{
        loading:"loading course data...",
        success:"Course loaded successfully",
        error:"Failed  to get the courses",
    });
    
    return(await response).data.courses;
} catch (error) {
    toast.error(error?.response?.data?.message);
}
});

export const createNewCourse=createAsyncThunk("/course/create",async(data) =>{
    try {
        let formData=new FormData();
        formData.append("title",data?.title);
        formData.append("description",data?.description); 
        formData.append("category",data?.category);
        formData.append("createdBy",data?.createdBy);
        formData.append("thumbnail",data?.thumbnail);
        
        const response=axiosInstance.post("/courses",formData);
        toast.promise(response,{
            loading:"creating new course",
            success:"Course created successfully",
            error:"Failed to created course"
        });

        return (await response).data

    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
});
const courseSlice=createSlice({
    name:"courses",
    initialState,
    reducers:[],
    extraReducers:(builder) =>{
          builder.addCase(getAllCoureses.fulfilled,(state,action)=>{
             if(action.payload){
                console.log(action.payload);//Print the course console
                state.courseData=[...action.payload];
             }
   })
    }
});

export default courseSlice.reducer;