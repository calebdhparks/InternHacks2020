import React from "react";

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description : '',
            location: '',
            jobList: [],
            toShow: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.makeList=this.makeList.bind(this)
    }

    handleSubmit(event){
        event.preventDefault(); //avoid page refresh
        // console.log(this.state)
        // axios.get('https://jobs.github.com/positions.json?description='+
        //     this.state.description+"&location="+this.state.location+"&full_time=true")
        //     .then(response => {console.log(response)})
        //     .catch(error => {console.log(error)})

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const proxyurl = "https://afternoon-dusk-24100.herokuapp.com/"
        const url = 'https://jobs.github.com/positions.json?description='+
            this.state.description+"&location="+this.state.location+"&full_time=true"
        fetch(proxyurl + url)
                .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
                  })
              ).then(res => {
                // for (var x in res.data){
                  // console.log(Object.keys(res.data).length)
                  this.setState({jobList:res.data})
                  this.setState({toShow:true})
                  // for (var x=0;x<Object.keys(res.data).length;x++){
                  //   console.log(res.data[x])
                  // }
                // }
              })).catch(e => {
                alert("Error: " + e.toString());
            })
        // fetch(url)
        //     .then(response => {console.log(response.json())})
        //     .catch(error => {
        //         console.log(error);
        //     });

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    makeList({items}){
      // console.log(items)
      return(
        // <ul>
        // {items.map(item =>
        //   <li key={item.id}>{item.title}</li>
        // )}
        // </ul>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <span>
                <strong> Company:</strong> {item.company }
              </span>
              <span>
                <strong> title:</strong> {item.title}
              </span>
              <span>
                <strong> Url</strong> {
                  <a href={item.url} target="_blank">{item.url}</a>

                }
              </span>
            </li>
          ))}
        </ul>
      )
    }
    render() {
        const { description, location, jobList,toShow } = this.state
        // console.log(this.state)
        // console.log(description, location, this.state.jobList,toShow )

        // if (typeof this.state.jobsList !== 'undefined'){

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
              {toShow&&<this.makeList items={this.state.jobList}/>}

              </div>
          )

    }
}
function ItemList({ items }){
  console.log("in function")
  return(
    <ul>
    {items.map(item =>
      <li key={item.id}>{item.title}</li>
    )}
    </ul>
  )
};


export default Search
