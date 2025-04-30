import type { TodoType } from "@/types";

const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos"; // @TODO IN THE FUTURE: move to .env

export const getTodos = async (): Promise<TodoType[]> => {
  try {
    const response = await fetch(TODOS_API_URL);

    if (!response.ok) {
      const errorMessage = `Request failed with status ${response.status}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const data: TodoType[] = await response.json();
    return data;
  } catch (error) {
    console.error("getTodos", error);
    throw new Error("Unable to fetch todos.");
  }
};
