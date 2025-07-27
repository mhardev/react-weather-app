
import axios from 'axios';

export async function getWeatherData(endpoint, place_id, measurementSystem) {
    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            language: 'en',
            units: measurementSystem,
        },
        headers: {
            'x-rapidapi-key': '7ae03fd63fmsh4551220859384a1p1fa150jsnd38736b6b74b',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


//API for Search Places
export async function searchPlaces(text) {
    
    const options = {
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
        params: {
            text,
            language: 'en'
        },
        headers: {
            'x-rapidapi-key': '7ae03fd63fmsh4551220859384a1p1fa150jsnd38736b6b74b',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}