import reducer, {
  addTodo,
  doNothing,
  removeTodo,
  Todo,
  TodoState,
  toggleCompleted,
} from "./todoSlice";

describe("todo state", () => {
  it("should return initial state", () => {
    const initialState: TodoState = { todos: [] };
    expect(reducer(undefined, doNothing)).toEqual(initialState);
  });

  it("should add a new item to an empty list", () => {
    expect(reducer(undefined, addTodo("test item"))).toMatchObject<TodoState>({
      todos: [
        {
          id: expect.any(String),
          description: "test item",
          completed: false,
        },
      ],
    });
  });

  it("should add a new item to an existing list", () => {
    const initialList: TodoState = {
      todos: [
        {
          id: "firstItem",
          description: "First Item",
          completed: false,
        },
      ],
    };

    expect(reducer(initialList, addTodo("Another Item"))).toEqual({
      todos: [
        ...initialList.todos,
        {
          id: expect.any(String),
          description: "Another Item",
          completed: false,
        },
      ],
    } as TodoState);
  });

  it("should remove an item from todo list with one item", () => {
    const todoState: TodoState = {
      todos: [
        {
          id: "removeMe",
          description: "Remove Me",
          completed: false,
        },
      ],
    };
    expect(reducer(todoState, removeTodo("removeMe"))).toEqual({
      todos: [],
    } as TodoState);
  });

  it("should remove todo from todo list with 3 items", () => {
    const todoState: TodoState = {
      todos: [
        {
          id: "firstItem",
          description: "First Item",
          completed: false,
        },
        {
          id: "removeMe",
          description: "Remove Me",
          completed: false,
        },
        {
          id: "secondItem",
          description: "Second Item",
          completed: false,
        },
      ],
    };

    const itemToBeRemoved = todoState.todos[1];

    expect(
      reducer(todoState, removeTodo("removeMe")).todos
    ).not.toContain<Todo>(itemToBeRemoved);
  });

  it("should mark a todo item as complete", () => {
    const todoState: TodoState = {
      todos: [
        {
          id: "firstItem",
          description: "First Item",
          completed: false,
        },
      ],
    };

    expect(
      reducer(todoState, toggleCompleted("firstItem")).todos[0].completed
    ).toBe(true);
  });
});
