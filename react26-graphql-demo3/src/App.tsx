import React from "react";

// Apollo core
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Apollo React bindings
import { ApolloProvider, useQuery } from "@apollo/client/react";

// GraphQL Query
const GET_USERS = gql`
  query {
    users(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error loading users</h2>;

  return (
    <div>
      {data.users.data.map((user: any) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// Apollo Client
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <h1>GraphQL Users</h1>
        <UsersList />
      </div>
    </ApolloProvider>
  );
}

export default App;