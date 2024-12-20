import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// ASYNC ACTIONS

export const sendCount = (count) => {
    return async (dispatch) => {
        console.log("pending")

        axios.post('https://foo.com', {curCount: count})
            .then(res => {
                console.log(res)
                console.log("success")
            })
            .catch(err => {
                console.log(err)
                console.log("failed")
                dispatch(counterActions.incrementByAmount(-100))
            })
    }
}

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;