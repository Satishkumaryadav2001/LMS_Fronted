import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosintance";

const initialState = {
    courseDate:[]
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
const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:[],
    extraReducers:(builder) =>{

    }
});

export default courseSlice.reducer;