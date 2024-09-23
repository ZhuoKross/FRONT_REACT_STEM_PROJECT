import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    author: "",
    id: "",
    journal: "",
    link: "",
    title: "",
    summary:""
}

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers:{
        fetchContent: (state, action) =>{
            return action.payload;   
        },
        createContent: (state, action)=>{
            const {author, id, journal, link, title, summary} = action.payload;

            state.author = author;
            state.id = id;
            state.journal = journal;
            state.link = link;
            state.title = title;
            state.summary = summary;
        }
    }
});


export const {fetchContent, createContent} = contentSlice.actions;

export default contentSlice.reducer;
