import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosintance from "../../Helpers/axiosintance";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem("role") || "",
    // data:localStorage.getItem('data') != undefined ? JSON.parse(localStorage.getItem('data')) :{}  this code write some issue
    data:localStorage.getItem('data') ||{}//below code run this code clean
};
export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
    try {
        const res=axiosintance.post("user/register",data);
        toast.promise(res,{
            loading:"Wait ! creating your account",
            success:(data) => {
                return data ?.data?.message;
            },
            error:"Failed to create account"
        });
        return(await res).data;
    } catch (error) {
        toast.error(error ?.response ?.data?.message);
    }
})

export const login=createAsyncThunk("/auth/login",async(data)=>{
    try {
        const res=axiosintance.post("user/login",data);
        toast.promise(res,{
            loading:"Wait ! authentication in progress...",
            success:(data) => {
                return data ?.data?.message;
            },
            error:"Failed to log in"
        });
        return(await res).data;
    } catch (error) {
        toast.error(error ?.response ?.data?.message);
    }
})

export const logout = createAsyncThunk("/auth/logout",async () => {
    try {
        const res=axiosintance.post("user/logout");
        toast.promise(res,{
            loading:"Wait ! Logout in progress...",
            success:(data) => {
                return data ?.data?.message;
            },
            error:"Failed to log out"
        });
        return(await res).data;
    } catch (error) {
        toast.error(error?.response?.message);
    }
})

export const updateProfile = createAsyncThunk("/user/update/profile",async(data)=>{
    try {
        const res=axiosintance.put(`user/update/${data[0]}`,data[1]);
        toast.promise(res,{
            loading:"Wait ! profile update in progress...",
            success:(data) => {
                return data ?.data?.message;
            },
            error:"Failed to update profile"
        });
        return(await res).data;
    } catch (error) {
        toast.error(error ?.response ?.data?.message);
    }
})


export const getUserData = createAsyncThunk("/user/details",async()=>{
    try {
        const res=axiosintance.get("user/me");
    
        return(await res).data;
    } catch (error) {
        toast.error(error ?.message);
    }
})
const authSlice=createSlice({
    name:`auth`,
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        builder.addCase(login.fulfilled,(state,action) => {
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role;

        })
        .addCase(logout.fulfilled,(state) => {
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role="";
        })
        .addCase(getUserData.fulfilled,(state,action) =>{
            if(!action?.payload?.user) return;
            localStorage.setItem("data",JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role);
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role;
        });
    }
});

// export const {} =authSlice.actions;

export default authSlice.reducer;