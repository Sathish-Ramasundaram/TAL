
---

# 🌍 When “Same Page, Different Data” Is Used in the Real World

This pattern is used **everywhere**.

## Real websites you already know:

| Website   | URL example      | What changes    |
| --------- | ---------------- | --------------- |
| Amazon    | `/product/123`   | Product details |
| YouTube   | `/watch?v=abc`   | Video           |
| Instagram | `/profile/john`  | User profile    |
| Netflix   | `/title/81234`   | Movie info      |
| Swiggy    | `/restaurant/45` | Restaurant menu |

👉 **Same page layout**
👉 **Different data based on URL**

---

# 🧠 Key Idea (Very Simple)

* **One page component**
* URL decides **what data to show**
* Route parameter (`:id`) tells **which item**

---

# 🎯 Visual Example We’ll Build

A **Products App**:

### URLs

```
/products        → Product list
/product/1       → Laptop details
/product/2       → Mobile details
/product/3       → Headphones details
```

### SAME PAGE:

👉 `ProductDetails.tsx`

### DIFFERENT DATA:

👉 Laptop / Mobile / Headphones

---

# 🏗 Real-World Style Example (Beginner Friendly)

We will:

* Store products in an **array**
* Read `id` from URL
* Show product details based on that `id`

---

## 📁 Product Data (Simulating a Backend)

### `src/data/products.ts`

.ts means TypeScript file

Just like:
.html → HTML file
.css → CSS file
.js → JavaScript file
.ts is for TypeScript

JavaScript = writing without rules
TypeScript = writing with helpful rules

.ts → normal TypeScript
.tsx → TypeScript with HTML-like JSX

```ts
export const products = [
  {
    id: "1",
    name: "Laptop",
    price: "₹70,000",
    description: "High performance laptop for work and study",
  },
  {
    id: "2",
    name: "Mobile Phone",
    price: "₹25,000",
    description: "Smartphone with great camera",
  },
  {
    id: "3",
    name: "Headphones",
    price: "₹3,000",
    description: "Noise cancelling headphones",
  },
];
```

---

## 📁 Products List Page

### `src/pages/Products.tsx`

```tsx
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function Products() {
  return (
    <div>
      <h2>🛒 Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
```

🔍 What’s happening:

* Loop through products
* Create links like `/product/1`, `/product/2`

---

## 📁 SAME PAGE – Product Details

### `src/pages/ProductDetails.tsx`

```tsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  // Find product that matches URL id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>❌ Product not found</h2>;
  }

  return (
    <div>
      <h2>📦 Product Details</h2>

      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}

export default ProductDetails;
```

* Same component
* URL changes → `id` changes
* Data shown changes

---

## 📁 App Routes

### `src/App.tsx`

```tsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 Real World Example</h1>

      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
```

---

# 👀 Now Visualize What Happens

### You click:

```
Laptop
```

### URL becomes:

```
/product/1
```

### React does:

* Reads `id = 1`
* Finds Laptop
* Shows Laptop details

---

### You click:

```
Mobile
```

### URL becomes:

```
/product/2
```

### SAME PAGE:

* `ProductDetails.tsx`
* DIFFERENT DATA (Mobile)

---

# 🧠 This Is EXACTLY How Real Apps Work

Later you will replace:

```ts
products.find(...)
```

with:

```ts
fetch(`/api/products/${id}`)
```

Same idea. Same structure.

---

# 🔑 One Line Summary (Remember This Forever)

> **Dynamic routes = same page layout, different data based on URL**

---
