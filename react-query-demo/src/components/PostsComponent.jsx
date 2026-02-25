import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Something want worring!");
  }
  return response.json();
};

const PostsComponent = () => {
  const { isError, data, refetch, isFetched, isLoading } =
    useQuery({
      queryKey: ["data"],
      queryFn: fetchPosts,
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      // placeholderData: keepPreviousData,
    });

  let queryClient = useQueryClient();
  const cachedPost = queryClient.getQueryData(["data"])
  if (isLoading) return "Loading...";
  if (isFetched && !data) return <div>Log initial data...</div>;
  if (isError) return "An error has occurred.";

  return (
    <div>
      <div>
        <h1>React Query</h1>
        <button onClick={() => refetch()}>Refatch</button>
      </div>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h1>{user.title} </h1>
            <p>{user.body} </p>
          </div>
        ))}
    </div>
  );
};

export default PostsComponent;
