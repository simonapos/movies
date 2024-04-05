# Movie Finder

## Description
Movie Finder is a responsive movie landing page created using HTML, CSS, Bootstrap 5,  and Javascript/jQuery. It showcases movie posters with details and allows users to filter movies by genre. The project also integrates an API for fetching movie quotes.
**[View Live Demo](https://simonapos.github.io/movies/)**

## Features
- Responsive design using Bootstrap 5 for optimal viewing across devices.
- Movie posters displayed with details such as title, genre, year, and description.
- Filter movies by genre to easily find movies of interest.
- Integration with an API for fetching movie quotes to enhance the user experience.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/simonapos/movies.git

## Usage
- Browse through the movie posters and click on a movie card to view more details.
- Use the dropdown to filter movies by genre.
- Add movies.
- Enjoy movie quotes fetched from the integrated API.

## Additional Note

### Problem
The API used in the project didn't display data properly on GitHub Pages due to restrictions on certain types of requests, including those to external APIs, for security reasons.

### Solution
To bypass this restriction, I used a free proxy server. A proxy server acts as an intermediary between our website and the API, allowing us to fetch data from the API indirectly.

### Implementation
I integrated the proxy server into the project by modifying the API request URLs to go through the proxy server. This way, when the project is hosted on GitHub Pages, the requests are routed through the proxy server, enabling us to retrieve the data successfully. 
