# Cat Breeds Explorer 🐱

This project is a simple web application that displays information about cat breeds using data from the public **TheCatAPI**.

The site allows users to browse a list of cat breeds and click on a breed to view detailed information about it.

## Features

* Displays a list of cat breeds
* Fetches data from TheCatAPI
* Shows detailed information about each breed
* Uses dynamic navigation between pages
* Retrieves data using JavaScript and the Fetch API

## Technologies Used

* HTML
* CSS
* JavaScript
* TheCatAPI (public API)

## API Endpoints Used

This project uses data from the following API endpoints:

1. **List of breeds**

   https://api.thecatapi.com/v1/breeds

2. **Breed image**

   Images are loaded using the reference image ID returned from the breeds endpoint.

## Project Structure

```
CTD_task
│
├── index.html        # main page showing the list of cat breeds
├── details.html      # page displaying breed details
├── style.css         # styling for the pages
├── app.js            # JavaScript for loading the breed list
├── details.js        # JavaScript for loading breed details
└── README.md
```

## How to Run the Project

1. Clone the repository:

```
git clone https://github.com/Alevtina-Babinskaya/CTD_task.git
```

2. Open the project folder.

3. Open `index.html` in your web browser.

Alternatively, you can run the project using **Live Server** in VS Code.

## How It Works

1. The main page (`index.html`) sends a request to TheCatAPI to retrieve a list of cat breeds.
2. The breeds are displayed as a list on the page.
3. When a user clicks on a breed, they are taken to the `details.html` page.
4. The details page reads the breed ID from the URL and sends a new API request to display information about that breed.

## Author

Created by Alevtina Babinskaya.
