
---

## Simple HTML Form (Page Refresh Happens)

👉 Copy this into a file named **`index.html`**
👉 Open it directly in your browser (double-click)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Form Refresh Demo</title>
</head>
<body>
  <h1>Plain HTML Form</h1>

  <form>
    <label>
      Name:
      <input type="text" name="name">
    </label>
    <br><br>

    <label>
      Email:
      <input type="email" name="email">
    </label>
    <br><br>

    <button type="submit">Submit</button>
  </form>

  <p>
    👉 After clicking submit, the page refreshes  
    👉 Typed values are lost
  </p>
</body>
</html>
```

### 🔎 What You’ll Notice

* Click **Submit**
* Page reloads
* Inputs become empty
* Browser handles everything

---

## HTML Form with JavaScript (Prevent Refresh)

Now compare this 👇

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Form Without Refresh</title>
</head>
<body>
  <h1>HTML Form (No Refresh)</h1>

  <form id="myForm">
    <label>
      Name:
      <input type="text" id="name">
    </label>
    <br><br>

    <label>
      Email:
      <input type="email" id="email">
    </label>
    <br><br>

    <button type="submit">Submit</button>
  </form>

  <script>
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // stop refresh

      alert(
        "Name: " + document.getElementById("name").value +
        "\nEmail: " + document.getElementById("email").value
      );

      // manually clear inputs
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    });
  </script>
</body>
</html>
```

---

## Key Difference (HTML vs React)

### 🟡 Plain HTML

* Browser controls the form
* Refresh happens by default
* DOM values are read directly

### 🔵 React

* React controls the form
* No refresh
* Values come from **state**
* UI updates automatically

---

## 4️⃣ Important Beginner Insight 🔑

In plain HTML:

```js
input.value = ""
```

In React:

```ts
setName("")
```

> **DOM vs State** — this is the core difference.

---
