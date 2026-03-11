const params = new URLSearchParams(window.location.search);
const breedId = params.get("id");

const API_KEY = "Ylive_f47nyh2jOaWrOZUNc9xCJnMI4Mw8FCxKqOH42iBPNVjeCvgUPH43BHRvpwrV4MbA"; 

// fatch data
fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
    "x-api-key": API_KEY
    }
})
    .then(res => res.json())
    .then(data => {
    const breed = data.find(b => b.id === breedId); // find the breed by ID

    if (!breed) {
        document.getElementById("breed-name").textContent = "Breed not found";
    return;
}

  // create html code
document.getElementById("breed-name").textContent = breed.name;
document.getElementById("breed-origin").textContent = `Origin: ${breed.origin}`;
document.getElementById("breed-temperament").textContent = `Temperament: ${breed.temperament}`;
document.getElementById("breed-life").textContent = `Life span: ${breed.life_span} years`;
document.getElementById("breed-description").textContent = breed.description;
document.getElementById("breed-image").src = `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`;
document.getElementById("breed-image").alt = breed.name;
})
.catch(err => console.error(err));