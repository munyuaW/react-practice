import useSWR from "swr";

function FetchTodos() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const endpoint = "https://jsonplaceholder.typicode.com/todos";
  const { data, error, isLoading } = useSWR(endpoint, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      {data.slice(0, 10).map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default FetchTodos;
