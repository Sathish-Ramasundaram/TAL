export async function searchTodos(query: string) {
  const response = await fetch(
    `https://dummyjson.com/todos/search?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}
