import { FETCH_WEATHER } from "./FetchWeather"
export default function weatherreducer(state=[],action){
    // console.log("Action recieved",action.payload)
//    const payload1 =  Promise.resolve(action.payload).then(function(value) {
//         // console.log(value.data.name); // "Success"
//         return (value.data.name)
//         });
    // console.log("reduc",action.payload.data.city.name)
    switch(action.type){
        case FETCH_WEATHER :
             return [action.payload.data, ...state]
    }
    return state;
}