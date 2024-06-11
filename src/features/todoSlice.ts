import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ITodo {
  docId: string,
  created: string,
  description: string,
  title: string
}

// Define the initial state type
type TodosState = ITodo[];

// Initialize the initial state
const initialState: TodosState = [];

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
        return action.payload
    },
    addTodos: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload)
    },
    deleteTodos: (state, action: PayloadAction<string>) => {
         return state.filter((item: ITodo) => item.docId !== action.payload)
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
        const index = state.findIndex(todo => todo.docId === action.payload.docId);
        if (index !== -1) {
            state[index] = action.payload;
        }
    }
  },
})

export const { setTodos, addTodos, deleteTodos, updateTodo } = todoSlice.actions

export default todoSlice.reducer
