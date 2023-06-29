import './css/fonts.css';
import './css/styles.css';

const url = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en/example';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'lingua-robot.p.rapidapi.com'
    }
};

(async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
