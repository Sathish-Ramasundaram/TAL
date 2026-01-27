export async function fetchTodo() {
  const response = await fetch(
    "https://dummyjson.com/todos"
  );

  if (!response.ok) {
    throw new Error("API failed");
  }

  return response.json();
}
