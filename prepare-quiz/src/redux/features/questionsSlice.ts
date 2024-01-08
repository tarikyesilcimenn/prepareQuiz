import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IQuestions {
    question: object,
    showQuestion: boolean
}

const initialState= {
    question:{},
    showQuestion: false

} as IQuestions

export const questions = createSlice({
    name: 'questions',
    initialState,
    reducers:{
        addQuestions: (state, action:PayloadAction<object>) => {
            state.question = action.payload
        },
        showQuestionModal: (state, action: PayloadAction<boolean>) => {
            state.showQuestion = action.payload
        }
    }
});

export const {
    addQuestions,
    showQuestionModal
} = questions.actions;

export default  questions.reducer;