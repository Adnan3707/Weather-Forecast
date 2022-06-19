import React,{Component} from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";
import GoogleMaps from "../components/GoogleMaps";

 class WeatherList extends Component{
     renderCity(city){
         const temps=city.list.map(temps=> temps.main.temp)
         const presu=city.list.map(pres => pres.main.pressure)
         const humid=city.list.map(humid => humid.main.humidity)
         const {lat,lon} = city.city.coord
         // console.log(pressure)
        //  console.log(temps)
         return(
        <tr key={city.city.name}>
        <td>{city.city.name}</td>
        {/* <td><GoogleMaps lat={lat} lon={lon}/></td> */}
        {/* <td><GoogleMaps lat={lat} lon={lon}/></td> */}
        <td><Chart data={temps} color={"red"}/></td>
        <td><Chart data={presu} color={"orange"}/></td>
        <td><Chart data={humid} color={"green"}/></td>
        </tr>
         )
     }
    render(){
        // console.log("props",this.props.weather)
        return(
            <table className="table tabel-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempature</th>
                        <th> Pressure</th>
                        <th> Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderCity)}
                </tbody>
            </table>
        )
    }
}
function mapStatetoProps(state){
    // console.log("mapstate to props",state)
  return{
      weather: state.weather
        } 
}
export default connect(mapStatetoProps)(WeatherList)