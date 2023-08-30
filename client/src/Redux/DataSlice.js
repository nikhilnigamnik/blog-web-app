import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "apiData",
    initialState: [],
    reducers: {
        setData: (state, action) => {
            return action.payload;
        }
    }
})


export const { setData } = DataSlice.actions;
export default DataSlice.reducer;