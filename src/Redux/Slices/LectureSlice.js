import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosintance";

const initialState ={
    lectures:[]

}
export  const getCourseLectures = createAsyncThunk("/course/lecture/get",async(cid) =>{
                    try {
                        const response = axiosInstance.get(`/courses/${cid}`);
                        toast.promise(response,{
                            loading:"Fatching course lectures",
                            success:"Lecture fatched successfully",
                            errror:"Failed to load the lecture"
                        });
                        return (await response).data;
                    } catch (error) {
                        toast.error(error?.response?.data?.message);
                    }
});

export  const addCourseLecture = createAsyncThunk("/course/lecture/add",async(data) =>{
    try {
        const formData =new FormData();
        formData.append("lecture",data.lectuure);
        formData.append("title",data.title);
        formData.append("description",data.description);

        const response = axiosInstance.post(`/courses/${data.id}`,formData);
        toast.promise(response,{
            loading:"Adding course lecture",
            success:"Lecture Added successfully",
            errror:"Failed to add the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export  const deleteCourseLecture = createAsyncThunk("/course/lecture/delete",async(data) =>{
    try {
      
        const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`);
        toast.promise(response,{
            loading:"Deleting course lecture",
            success:"Lecture deleted successfully",
            errror:"Failed to delete the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

const lecturesSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLectures.fulfilled,(state,action) =>{
            state.lectures = action?.payload?.lectures;
        })
        .addCase(addCourseLecture.fulfilled,(state,action) =>{
            state.lectures =action?.payload?.couser?.lectures;
        })
    }
});

export default lecturesSlice.reducer;