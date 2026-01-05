const headers = document.querySelectorAll("h2");
let i = 1;
headers.forEach((header) => {
  header.innerText = `${i}. ${header.innerText}`;
  i += 1;
});
