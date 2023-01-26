import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params)=> {
    const {category, search, pages, sortType} = params;
    const res = await axios.get(`https://63a6cbe359fd83b1bb3819f4.mockapi.io/items-react-pizza?${pages}&${category}${search}&sortBy=${sortType}&order=desc`)
    console.log (res.data)
    return res.data
})

const initialState = {
    items:[],
    status: 'loading', // loading | success | error
}

const pizzaSlice = createSlice ({
    name: 'pizza',
    initialState,
    reducers: {
    setItems (state, action) {
        state.items = action.payload;
    }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error';
            state.items = []
        },
    }
})

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer