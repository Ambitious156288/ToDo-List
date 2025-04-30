import { Box, Checkbox, Typography } from "@mui/material";
import type { TodoType } from "@/types";
import { memo } from "react";

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
};

const TodoItemComponent = ({ todo, onToggle }: TodoItemProps) => (
  <Box display="flex" alignItems="center" py={1} borderBottom="1px solid #eee">
    <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
    <Typography
      sx={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.title}
    </Typography>
  </Box>
);

TodoItemComponent.displayName = "TodoItem";

export const TodoItem = memo(
  TodoItemComponent,
  (prevProps, nextProps) => prevProps === nextProps
);
