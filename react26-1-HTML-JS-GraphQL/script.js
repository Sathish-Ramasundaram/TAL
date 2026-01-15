const usersDiv = document.getElementById("users");

// GraphQL Query
const query = `
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

// Send GraphQL request
fetch("https://graphqlzero.almansi.me/api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query,
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log("GraphQL Response:", result);

    const users = result.data.users.data;
    usersDiv.innerHTML = "";

    users.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user";

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;

      usersDiv.appendChild(div);
    });
  })
  .catch((error) => {
    usersDiv.innerHTML = "Error loading users";
    console.error("Error:", error);
  });
