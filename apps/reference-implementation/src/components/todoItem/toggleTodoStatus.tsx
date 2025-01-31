"use client";

import { type FC, useOptimistic, useTransition } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "@repo/ui/button";
import { CheckBadge } from "@repo/ui/icons";

import { setTodoDoneStatus } from "~/server/serverFunctions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  const [optimisticTodo, toggleOptimisticTodoStatus] = useOptimistic(
    todo,
    (currentTodo: Todo, optimisitcDoneStatus: boolean) => ({
      ...currentTodo,
      done: optimisitcDoneStatus,
    }),
  );

  const handleToggleTodoStatus = () => {
    startTransition(async () => {
      toggleOptimisticTodoStatus(!optimisticTodo.done);
      await setTodoDoneStatus(todo.id, !optimisticTodo.done);
    });
  };

  return (
    <Button
      variant="ghost"
      type="submit"
      size="icon"
      className="border-0 [&_svg]:size-8"
      onClick={handleToggleTodoStatus}
    >
      <CheckBadge
        className={`${optimisticTodo.done ? "text-green-700" : "text-red-700"}`}
      />
    </Button>
  );
};
