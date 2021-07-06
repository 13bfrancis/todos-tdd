import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    doNothing: () => {},
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: nanoid(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
  },
});

export const { doNothing, addTodo, removeTodo, toggleCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
