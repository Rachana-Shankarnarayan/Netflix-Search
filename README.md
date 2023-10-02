<<<<<<< HEAD
# Netflix Search

Netflix Search is a web application that allows users to search for movies and TV shows on Netflix by genre or by keyword(movie). It leverages the Metaphor API for searching and retrieving content information from Netflix.

## Table of Contents

# Features

# Prerequisites

# Installation

# Usage

# How It Works

# Features

Search by Genre: Users can select a genre from a dropdown list and search for content within that genre.

Search by Movie/Keyword: Users can enter a movie or keyword to search for relevant content on Netflix.

Display Results: The application displays search results, including titles, descriptions, and links to Netflix.

# Prerequisites

Before you begin, ensure you have met the following requirements:

=======
# Netflix-Search
Netflix Search is a web application that allows users to search for movies and TV shows on Netflix by genre or by keyword. It leverages the Metaphor API for searching and retrieving content information from Netflix.

### Table of Contents
### Features
### Prerequisites
### Installation
### Usage
### How It Works

### Features
Search by Genre: Users can select a genre from a dropdown list and search for content within that genre.
Search by Movie/Keyword: Users can enter a movie or keyword to search for relevant content on Netflix.
Display Results: The application displays search results, including titles, descriptions, and links to Netflix.

### Prerequisites
Before you begin, ensure you have met the following requirements:
>>>>>>> c1108520931637af6e4608d446cff94de4712055
Python 3.x installed on your machine.
Flask web framework installed. You can install it using pip:
Copy code
pip install Flask

<<<<<<< HEAD
# Installation

=======
### Installation
>>>>>>> c1108520931637af6e4608d446cff94de4712055
Clone the GitHub repository:
bash
Copy code
git clone https://github.com/your-username/netflix-search.git
Change the working directory to the project folder:
bash
Copy code
cd netflix-search
Install project dependencies:
Copy code
pip install -r requirements.txt

<<<<<<< HEAD
# Usage

Obtain a Metaphor API key from Metaphor and replace metaphor_api_key in app.py with your API key.

Run the Flask application:

Copy code
python app.py
Open a web browser and navigate to http://localhost:5000.

Use the application to search for Netflix content by genre or keyword.

# How It Works

The application uses the Flask framework to serve a web interface.

Users can select the "Search by Genre" or "Search by Movie" option.

For "Search by Genre," users can select a genre from the dropdown menu and click the "Search" button. The application sends a request to the Metaphor API to search for content within the selected genre on Netflix.

For "Search by Movie," users can enter a movie or keyword and click the "Search" button. The application sends a request to the Metaphor API to search for content related to the entered keyword on Netflix.

The search results are displayed on the web page, including the title, description, and a link to view the content on Netflix.
=======
### Usage
Obtain a Metaphor API key from Metaphor(https://docs.metaphor.systems/reference/getting-started-1) and replace metaphor_api_key in app.py with your API key.
Run the Flask application:
Copy code
python app.py
Open a web browser and navigate to http://localhost:5000.
Use the application to search for Netflix content by genre or keyword.

### How It Works
The application uses the Flask framework to serve a web interface.
Users can select the "Search by Genre" or "Search by Movie" option.
For "Search by Genre," users can select a genre from the dropdown menu and click the "Search" button. The application sends a request to the Metaphor API to search for content within the selected genre on Netflix.
For "Search by Movie," users can enter a movie or keyword and click the "Search" button. The application sends a request to the Metaphor API to search for content related to the entered keyword on Netflix.
The search results are displayed on the web page, including the title, description, and a link to view the content on Netflix.

>>>>>>> c1108520931637af6e4608d446cff94de4712055
