export async function fetchTodo() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/2"
  );

  if (!response.ok) {
    throw new Error("API failed");
  }

  return response.json();
}
