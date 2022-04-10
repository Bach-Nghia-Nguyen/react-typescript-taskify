export interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
}

// import React, { useReducer } from "react";
// import { nanoid } from "nanoid";

// type Actions =
//   | {
//       type: "add";
//       payload: string;
//     }
//   | { type: "remove"; payload: string }
//   | { type: "done"; payload: string };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "add":
//       return [...state, { id: nanoid(), todo: action.payload, isDone: false }];

//     case "remove":
//       return state.filter((todo) => todo.id !== action.payload);

//     case "done":
//       return state.map((todo) =>
//         todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );

//     default:
//       return state;
//   }
// };

// const ReducerExample: React.FC = (): JSX.Element => {
//   const [state, dispatch] = useReducer(TodoReducer, []);

//   return <div />;
// };
