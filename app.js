const API_KEY = "live_f47nyh2jOaWrOZUNc9xCJnMI4Mw8FCxKqOH42iBPNVjeCvgUPH43BHRvpwrV4MbA";
const listContainer = document.getElementById("myList");

fetch("https://api.thecatapi.com/v1/breeds", {
headers: {
"x-api-key": API_KEY
}
})
.then(response => response.json())
.then(data => {

data.forEach(item => {

  const li = document.createElement("li");

  const link = document.createElement("a");
  link.textContent = item.name;

  
  link.href = `details.html?id=${item.id}`;

  li.appendChild(link);
  listContainer.appendChild(li);

});

});
