import axios from "axios";

const API_KEY= 'e75fbc38a6a2966194a0fd2157f0b46a'
export const FETCH_WEATHER = 'FETCH_WEATHER'
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}



export default function FetchWeather(city){
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${API_KEY}`
    const URL1=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city},us`
    const request = axios.get(URL1)
    // console.log("Request",request)
        return{
            type: FETCH_WEATHER,
            payload: request
        }
}