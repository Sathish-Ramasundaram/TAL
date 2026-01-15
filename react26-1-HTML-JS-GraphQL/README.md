
We’ll do this in **3 simple files**:

* ✅ **HTML**
* ✅ **Plain JavaScript**
* ✅ **GraphQL (via fetch)**

This will **100% work** in your browser.

---

# 🧠 First: What we are doing 

* GraphQL is just **HTTP + JSON**
* We send a **POST request**
* We send a **query string**
* Server sends **exactly the data we ask**

No React. No framework. Just browser.

---

# 🌐 GraphQL API we will use

```
https://graphqlzero.almansi.me/api
```

(This is a public GraphQL server for learning)

---

## ❓ Why opening this URL shows nothing?

👉 **[https://graphqlzero.almansi.me/api](https://graphqlzero.almansi.me/api)**

You expected:

```json
{ "users": [...] }
```

But you see **nothing / error / plain page**.

### ✅ This is **CORRECT behavior**.

---

# 🧠 Core Concept (Very Important)

### 🔴 GraphQL is NOT like REST

| REST                         | GraphQL                               |
| ---------------------------- | ------------------------------------- |
| Data shown when you open URL | Data shown ONLY when you send a query |
| `GET /users`                 | `POST /graphql` with query            |
| Browser shows JSON           | Browser shows nothing                 |

---

# 🏪 Think of GraphQL like this analogy

### REST API = Open Shop

You walk in → products are visible

### GraphQL API = Kitchen Counter 🍳

You must **order food**
If you don’t order → nothing is served

> Opening the GraphQL URL without a query = standing silently at the counter

---

# 📦 Where is the data actually stored?

> ❗ **The data is inside the server**, NOT inside JSON files you can see.

### GraphQLZero:

* Has **internal database**
* Simulates users, posts, comments
* You **cannot browse files**
* You can **only query via GraphQL**

Just like:

* You can’t see Amazon’s database
* You can only request data via API

---

# 🔍 How does GraphQL get data then?

### You send:

```json
{
  "query": "{ users { data { name email } } }"
}
```

### Server does internally:

```
Database → Resolver → Response
```

### Server returns:

```json
{
  "data": {
    "users": {
      "data": [...]
    }
  }
}
```

---

# 🧪 Try this (Visual Proof)

### Step 1: Open browser DevTools

Press **F12 → Console**

### Step 2: Paste this code 👇

```js
fetch("https://graphqlzero.almansi.me/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `
      {
        users {
          data {
            id
            name
          }
        }
      }
    `
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

### ✅ You WILL see data

---

# 🧩 Why you don’t see any JSON file

Because:

❌ GraphQL does **NOT expose files**
❌ GraphQL does **NOT expose endpoints per resource**
❌ GraphQL does **NOT expose raw DB**

✅ GraphQL exposes **ONE endpoint**

```
/graphql
```

Everything happens through:

```
Query → Resolver → Database
```

---

# 🧠 REST vs GraphQL (File analogy)

### REST

```
/users.json
/posts.json
/comments.json
```

### GraphQL

```
/graphql
(no files visible)
```

---

# 🧠 This is why GraphQL is powerful

✔ No over-fetching
✔ No under-fetching
✔ Single endpoint
✔ Frontend controls response shape

---

# 🔥 Final Important Line (Remember this)

> **GraphQL servers NEVER show data by default**
> **They respond ONLY to queries**

---


---

# 📁 Folder structure

Create a folder anywhere:

```
graphql-vanilla/
 ├── index.html
 └── script.js
```

---

# 📄 index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GraphQL with Plain JS</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .user {
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <h1>👤 Users (GraphQL)</h1>
    <div id="users">Loading...</div>

    <script src="script.js"></script>
  </body>
</html>
```

---

# 📄 script.js (IMPORTANT – copy exactly)

```javascript
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
```

---

# ▶️ How to run (VERY SIMPLE)

### Option 1 (Easiest)

1. Double-click **index.html**
2. It opens in browser
3. ✅ You will see users

### Option 2 (VS Code)

1. Open folder in VS Code
2. Right-click `index.html`
3. **Open with Live Server** (if installed)

---

# ✅ What you should see

```
👤 Users (GraphQL)

Leanne Graham
Email: ...
Phone: ...

Ervin Howell
Email: ...
Phone: ...
```

---

# 🔍 Open DevTools (IMPORTANT)

Press **F12 → Console**

You’ll see:

```text
GraphQL Response: { data: { users: { data: [...] } } }
```

This proves:

* GraphQL is working
* Data is coming
* No framework magic involved

---

# 🧠 NOW the KEY DIFFERENCE (REST vs GraphQL)

### REST

```http
GET /users
```

Server decides what to send.

### GraphQL

```graphql
{
  users {
    id
    name
    email
  }
}
```

**YOU decide what fields you want**.

> REST = Fixed menu
> GraphQL = Order exactly what you want 🍽️

---
