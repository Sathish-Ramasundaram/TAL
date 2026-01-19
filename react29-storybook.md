

What does “tightly coupled” mean?

👉 Tightly coupled means:

One part of the app directly depends on another part

If you change one thing, many other things break

Components cannot work independently

Simple example (real life)

Think of a TV remote where:

If one button breaks, the entire remote stops working

That’s tight coupling.

2️⃣ What does “fragile” mean?

👉 Fragile means:

Small changes cause unexpected bugs

You are afraid to change code

Fixing one bug creates new bugs elsewhere

So:

Fragile = easily breakable

---

When should we use Storybook?

Use Storybook when:

✔ Building reusable components
✔ Working with designers
✔ Creating design systems
✔ Large React applications
✔ Want visual confidence before release

----

How do we use Storybook?

High-level flow:

Component → Story → Run Storybook → View UI


Each story = one UI state

Example:

Button (Primary)

Button (Disabled)

Button (Large)

---

Hands-On Project (Beginner Friendly)

We will build:

✔ CRA + TypeScript project
✔ Simple Button component
✔ Storybook setup
✔ Multiple stories

----

run this to create the project
npx create-react-app react29-storybook-demo --template typescript

cd react29-storybook-demo

code .

-----

Try second time: 
npx create-react-app react29-storybook-demo2 --template typescript

Now, try CRA+webpack

Note: 
Setup	Easiest	Storybook Integration	Performance
CRA + Webpack	✅	Best	Normal
Vite + Rspack	👍	Best	Fastest
CRA + Rspack	❌	Unsupported	❌

cd react29-storybook-demo2

