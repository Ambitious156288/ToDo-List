import { useTodos } from "@/hooks/useTodos";
import { Container, Typography, Box, Alert } from "@mui/material";
import { FilterControls } from "@/components/FilterControls";
import { TodoItem } from "@/components/TodoItem";
import { CenteredLoader } from "@/components/CenteredLoader";

const Home = () => {
  const { todos, loading, error, toggleTodo, setFilter, filter } = useTodos();

  if (loading) return <CenteredLoader />;

  if (error) return <Alert severity="error">{error}</Alert>;

  if (todos.length === 0) return <Typography>No todos found.</Typography>;

  return (
    <Container maxWidth="sm" sx={{ padding: "2rem" }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: "1rem" }}>
        📝 ToDo List
      </Typography>

      <FilterControls current={filter} onChange={setFilter} />

      <Box component="ul" sx={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
