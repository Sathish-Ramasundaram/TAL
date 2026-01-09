// Store count value
let count = 0;

// Get DOM elements (REAL DOM)
const countSpan = document.getElementById("count");
const button = document.getElementById("btn");
const logBox = document.getElementById("log");

// Add click event
button.addEventListener("click", function () {
  count++;

  // 🔴 Direct DOM manipulation
  countSpan.textContent = count;

  // 🔴 Another DOM update
  logBox.textContent = "DOM updated at: " + new Date().toLocaleTimeString();

  console.log("DOM updated, count =", count);
});
