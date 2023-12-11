import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IQuestions {
    question: object
}

const initialState= {
    question:{}

} as IQuestions

export const questions = createSlice({
    name: 'questions',
    initialState,
    reducers:{
        addQuestions: (state, action:PayloadAction<object>) => {
            state.question = action.payload
        }
    }
});

export const {
    addQuestions
} = questions.actions;

export default  questions.reducer;