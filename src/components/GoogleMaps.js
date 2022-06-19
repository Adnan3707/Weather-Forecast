import React,{Component} from "React";

class GoogleMaps extends Component {
    componentDidMount(){
        // console.log(this.props)
      new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
                }
        })
    }

    render(){
        return <div ref="map"/>
    }
}
export default GoogleMaps