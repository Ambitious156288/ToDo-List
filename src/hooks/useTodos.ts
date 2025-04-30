import { useEffect, useMemo, useState } from "react";
import type { Filter, TodoType } from "@/types";
import { getTodos } from "@/pages/api";
import { OPTIONS } from "@/components/consts";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [filter, setFilter] = useState<Filter>(OPTIONS.ALL);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
      } catch {
        setError("Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const toggleTodo = (id: number) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      switch (filter) {
        case OPTIONS.COMPLETED:
          return todo.completed;
        case OPTIONS.NOT_COMPLETED:
          return !todo.completed;
        default:
          return true;
      }
    });
  }, [todos, filter]);

  return {
    todos: filteredTodos,
    loading,
    error,
    toggleTodo,
    setFilter,
    filter,
  };
};
