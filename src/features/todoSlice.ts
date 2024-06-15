import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  docId: string;
  created: string;
  description: string;
  title: string;
}

type TodosState = ITodo[];

const initialValues: TodosState = [];

export const todoSlice = createSlice({
  name: 'Todo',
  initialState: initialValues,
  reducers: {
    setTodos: (_, action: PayloadAction<ITodo[]>) => {
      return action.payload; // Directly returning the payload as the new state
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload); // Using Immer.js to handle state immutably
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((item: ITodo) => item.docId !== action.payload); // Returning new array without the deleted item
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.findIndex(todo => todo.docId === action.payload.docId);
      if (index !== -1) {
        state[index] = action.payload; // Updating the todo item at the found index
      }
    },
  },
});

export const { setTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
