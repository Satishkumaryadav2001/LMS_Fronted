import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosintance from "../../Helpers/axiosintance";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem('data') ||{}
};
export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
    try {
        const res=axiosintance.post("user/register",data);
        toast.promise(res,{
            loading:"Wait ! creating your account",
            success:(data) => {
                return data ?.data?.messsage;
            },
            error:"Failed to create account"
        });
        return(await res).data;
    } catch (error) {
        toast.error(error ?.response ?.data?.messsage);
    }
})
const authSlice=createSlice({
    name:`auth`,
    initialState,
    reducers:{},
});

// export const {} =authSlice.actions;

export default authSlice.reducer;