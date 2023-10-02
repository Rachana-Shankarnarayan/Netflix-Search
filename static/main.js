// main.js

function toggleSection(id) {
    var genreSection = document.getElementById("genre-section");
    var movieSection = document.getElementById("movie-section");
    var searchResultsSection = document.getElementById("search-results");

    if (id === "search-genre-button") {
        genreSection.style.display = "block"; // Show genre section
        movieSection.style.display = "none";
        searchResultsSection.style.display = "none"; // Hide search results
    } else {
        genreSection.style.display = "none"; // Hide genre section
        movieSection.style.display = "block"; // Show movie section
        searchResultsSection.style.display = "none"; // Hide search results
    }
}

function searchByGenre() {
    var genreDropdown = document.getElementById("genre-dropdown");
    var selectedGenre = genreDropdown.value;

    if (!selectedGenre) {
        alert("Please select a genre.");
        return;
    }

    // Send the selected genre to the server via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search_genre", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displaySearchResults(response);
            } else {
                // Handle server errors or no results found
                var errorResponse = JSON.parse(xhr.responseText);
                displayError(errorResponse.error);
            }
        }
    };
    xhr.send("genre=" + selectedGenre);
}

function searchByMovie() {
    var movieInput = document.getElementById("movie").value;

    // Send the genre input to the server via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/search_movie", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displaySearchResults(response);
            } else {
                // Handle server errors or no results found
                var errorResponse = JSON.parse(xhr.responseText);
                displayError(errorResponse.error);
            }
        }
    };
    xhr.send("movie=" + movieInput);
}

function displaySearchResults(results) {
    var resultContainer = document.getElementById("result-list");
    resultContainer.innerHTML = "";

    if (results && results.length > 0) {
        var table = document.createElement("table");
        table.classList.add("result-table");

        // Create table headers
        var headers = ["Title", "Description", "Actions"];
        var headerRow = document.createElement("tr");
        headers.forEach(function (headerText) {
            var headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });
        table.appendChild(headerRow);

        results.forEach(function (item) {
            var row = document.createElement("tr");

            var cellTitle = document.createElement("td");
            cellTitle.textContent = item.title;
            row.appendChild(cellTitle);

            var cellDesc = document.createElement("td");
            var descriptionText = extractTextFromHTML(item.extract);
            cellDesc.textContent = descriptionText;
            row.appendChild(cellDesc);

            var cellButton = document.createElement("td");
            var button = document.createElement("a");
            button.textContent = "Link";
            button.href = item.url;
            button.target = "_blank";
            cellButton.appendChild(button);
            row.appendChild(cellButton);

            table.appendChild(row);
        });

        resultContainer.appendChild(table);
    } else {
        resultContainer.textContent = "No results found.";
    }

    // Show the search results section
    var searchResultsSection = document.getElementById("search-results");
    searchResultsSection.style.display = "block";
}

function displayError(errorMessage) {
    var resultContainer = document.getElementById("result-list");
    resultContainer.innerHTML = "Error: " + errorMessage;

    // Show the search results section
    var searchResultsSection = document.getElementById("search-results");
    searchResultsSection.style.display = "block";
}

function extractTextFromHTML(html) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
}
