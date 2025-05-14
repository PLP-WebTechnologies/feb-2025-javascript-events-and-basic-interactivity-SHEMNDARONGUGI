// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

document.getElementById("clickBtn").addEventListener("dblclick", () => {
  alert("Double-click detected!");
});

// 2. Interactive Elements
document.getElementById("changeColorBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const tabButtons = document.querySelectorAll(".tab");
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("tabContent").textContent = `Content for Tab ${button.dataset.tab}`;
  });
});

// Simple gallery
const images = [
  "https://placekitten.com/200/300",
  "https://placekitten.com/201/300",
  "https://placekitten.com/202/300"
];
let currentImg = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImg];
});

// 3. Form Validation
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const feedback = document.getElementById("feedback");

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    feedback.textContent = "Invalid email!";
    feedback.style.color = "red";
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});

// Bonus: Real-time feedback
document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("feedback");
  if (this.value.length < 8) {
    feedback.textContent = "Weak password";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Strong password";
    feedback.style.color = "green";
  }
});
