import React from "react";

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

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const proxyurl = "https://afternoon-dusk-24100.herokuapp.com/"
        const url = 'https://jobs.github.com/positions.json?description='+
            this.state.description+"&location="+this.state.location+"&full_time=true"
        fetch(proxyurl + url)
            .then(data => {
                console.log(data.json());
            })
            .catch(e => {
                alert("Error: " + e.toString());
            });


        // fetch(url)
        //     .then(response => {console.log(response.json())})
        //     .catch(error => {
        //         console.log(error);
        //     });

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { description, location } = this.state
        return (
            <div>
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
            </div>
        )
    }
}

export default Search