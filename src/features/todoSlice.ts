import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  docId: string;
  created: string;
  description: string;
  title: string;
}

type TodosState = ITodo[];

const initialState: TodosState = [];

export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((item: ITodo) => item.docId !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.findIndex(todo => todo.docId === action.payload.docId);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setTodos, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
