import React from "react";
import axios from "axios";

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description : '',
            location: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault(); //avoid page refresh
        console.log(this.state)
        // axios.get('https://jobs.github.com/positions.json?description='+
        //     this.state.description+"&location="+this.state.location+"&full_time=true")
        //     .then(response => {console.log(response)})
        //     .catch(error => {console.log(error)})

        //TODO: maybe use some other method instead of proxyurl
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://jobs.github.com/positions.json?description='+
            this.state.description+"&location="+this.state.location+"&full_time=true"

        fetch(proxyurl+url)
            .then(response => {console.log(response.json())})
            .catch(error => {console.log(error)})

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { description, location } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Job Explorer</h1>
            <div>
                <input type="text" className="form-control" name="description"
                       value={description} placeholder="description"
                       onChange={this.handleChange}/>
            </div>
            <div>
                <input type="text" className="form-control" name="location"
                       value={location} placeholder="loc"
                       onChange={this.handleChange}/>
            </div>
            <button type="submit">Search!</button>
        </form>
        )
    }
}

export default Search