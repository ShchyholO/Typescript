const app = document.getElementById("app");

const p = document.createElement("p");
const h1 = document.createElement("h1");
p.textContent = "Hello World";
h1.textContent = "Yeva";
app?.appendChild(p);
app?.appendChild(h1);