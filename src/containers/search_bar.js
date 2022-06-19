import React from "React";
import { connect } from "react-redux";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import FetchWeather from "../reducers/FetchWeather";
import { bindActionCreators } from "redux";
class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state={term:''}
        this.onInputChange=this.onInputChange.bind(this)
       this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onInputChange(event){
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.FetchWeather(this.state.term)
        this.setState({term: ''})
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Get a five-day forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({FetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar) 