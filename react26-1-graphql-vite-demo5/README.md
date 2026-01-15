# GraphQL React Demo

## About This Project

This is a React application that demonstrates how to integrate GraphQL with React using Apollo Client. The app fetches a list of users from a GraphQL API and displays their names and emails.

## What is the Use of It

This project serves as a starting point for learning GraphQL integration in React applications. It showcases:
- Setting up Apollo Client
- Writing GraphQL queries
- Using React hooks to fetch data
- Handling loading and error states

## How to Create This Project

Follow these steps to create a similar project from scratch.

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Step 1: Create a New React Project with Vite

```bash
npm create vite@latest graphql-demo -- --template react
cd graphql-demo
```

### Step 2: Install Dependencies

```bash
npm install @apollo/client graphql
```

### Step 3: Set Up Apollo Client

Create the following file structure:

```
src/
  apollo/
    client.js
  graphql/
    queries.js
  components/
    UserList.jsx
  App.jsx
  main.jsx
```

#### src/apollo/client.js

```javascript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphqlzero.almansi.me/api",
  }),
  cache: new InMemoryCache(),
});

export default client;
```

#### src/graphql/queries.js

```javascript
import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;
```

#### src/components/UserList.jsx

```jsx
import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "../graphql/queries";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.users.data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

#### src/App.jsx

```jsx
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <h1>GraphQL Practice App</h1>
      <UserList />
    </div>
  );
};

export default App;
```

#### src/main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import client from "./apollo/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

The app will display a list of users fetched from the GraphQL API.