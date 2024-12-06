import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoList } from "~/components/todo/todoList";
import { TodosActions } from "~/components/todo/todosActions";

import { marksAsCompleted, deleteTodos } from "~/server/serverFunctions";

export const TodosForm: FC<{ todos: Todo[] }> = ({ todos }) => {
  console.log("### TodosForm ###");
  // async function marksAsCompletedFormAction(formData: FormData) {
  //   const selectedTodos = formData.getAll("selectedTodos") as string[];

  //   markCompletedOptimistic(selectedTodos);
  //   await marksAsCompleted(formData);
  // }

  // const [optimisticTodos, markCompletedOptimistic] = useOptimistic(
  //   todos,
  //   (currentTodos: Todo[], selectedTodos: string[]) => {
  //     return currentTodos.map((todo) => {
  //       if (selectedTodos.includes(todo.id.toString())) {
  //         return {
  //           ...todo,
  //           completed: true,
  //         };
  //       }
  //       return todo;
  //     });
  //   },
  // );

  return (
    <form>
      <TodosActions
        marksAsCompletedFormAction={marksAsCompleted}
        deleteTodosFormAction={deleteTodos}
      />
      <TodoList todos={todos} />
    </form>
  );
};
