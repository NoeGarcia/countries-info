[![Header](https://github.com/NoeGarcia/countries-info/blob/main/public/gitHeader.png?raw=true)](https://github.com/NoeGarcia/countries-info/)
# Countries of the World (countries-info)
***
The **countries-info** website is designed to display a list of all the countries in the world and through it, provide detailed information about each of these countries such as their population, the region and subregion in which they are located, the languages ​​spoken in them, their flag and even the geographic location on a small map.

In addition, the application provides a search engine to facilitate the location of a specific country since the list is quite extensive and it can be difficult to find a particular country among all of them.

## Technologies used
Built with Node.js, Express.js, EJS, Bootstrap and with the help of the AXIOS (a Promise-based HTTP client module), it uses the [REST Countries API](https://restcountries.com/) to get the countries and their data. The [OpenStreetMap API](https://www.openstreetmap.org/) is also used with the help of the [Leaflet](https://leafletjs.com/) javascript library to display the location of each country on a world map. Both APIs are public and can be accessed without authentication, which cannot be achieved with the GoogleMaps API as it requires authentication. The Leaflet library is an open source project and works perfectly.  

Here's an example:  
![Data about Mexico country](https://github.com/NoeGarcia/countries-info/blob/main/public/gitDetailsPage.png?raw=true)

## How to clone and build it
To get the site up and running on your local machine, follow these steps: 
1. Clone the repository:  
    `git clone https://github.com/NoeGarcia/countries-info.git`

2. Install Dependencies (after you're sure that you have Node.js installed):  
	`npm install`
	
3. Start the server (you can use node or nodemon):  
	`node index.js`  
	or  
	`nodemon index.js`
4. Open your browser:  
	`Navigate to 'http://localhost:3000' to view the app.`
	
## Online demo
You can see a ***[live demo](https://countries-info-zqhi.onrender.com)*** powered by Render.com

## Motivation for this project
The reason for developing this project is to complete the capstone project of the section on How to use a Public API of the course "The Complete 2024 Web Development Bootcamp" available on Udemy.
