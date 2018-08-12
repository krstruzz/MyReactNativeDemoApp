//const mySportsFeedAPIKey = 'ae96c72d-4b21-43a9-955e-5b20b8';

const url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b01652ad35ff4b44bbcf81f55b30a361";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}