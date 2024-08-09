import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file folder on the server
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Configure EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware's Section
// Configure the static folder for files like CSS and JS
app.use(express.static(path.join(__dirname, 'public')));

// Main Route
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;

        // Sort countries by name
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));        

        res.render('index', { countries, country: null });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting all countries data.');
    }
});

// Look for a country by it's name Route
app.get('/search', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.redirect('/');
    }

    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        const country = response.data[0]; // Suppose that the search returns only one country
        res.render('index', { countries: [], country });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting country data.');
    }
});

// Look for a country by it's code Route
app.get('/country/:cca3', async (req, res) => {
    const cca3Code = req.params.cca3;
    if (!cca3Code) {
        return res.redirect('/');
    }

    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3Code}`);
        const country = response.data[0]; // Suppose that the search returns only one country
        res.render('index', { countries: [], country });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting country data.');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
