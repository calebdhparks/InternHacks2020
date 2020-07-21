
import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';

let formatTwoDigits = (digit) => ("0" + digit).slice(-2);

function getTodaysDate(){
    var tempDate = new Date();
    return `${tempDate.getFullYear()}-${formatTwoDigits(tempDate.getMonth()+1)}-${formatTwoDigits(tempDate.getDate())}`; 
}

class Form extends Component{
    constructor(){
        super()
        this.state = {
            position : "",
            compName: "",
            description : "",
            deadline : "",
            statusOfApplication : "Considering",
            notes : "",
            //searchWords : "",
        };

        //var values = [];
        this.onChange = this.onChange.bind(this)
        
    }

    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    /*addList = event => {
        const value = event.target.value;
        if(event.key === "Enter"){
            //this.values.push(value)
            console.log("hi")
        }
        alert("YE")
    }

    handlePosition = event => {
        const value = event.target.value;
        this.setState({
            positionVal: value
        }
        );
    }

    handleCompName = event => {
        const value = event.target.value;
        this.setState({
            compNameVal: value
        }
        );
    }

    handleJobDesc = event => {
        const value = event.target.value;
        this.setState({
            jobDescUrlVal: value
        }
        );
    }

    handleNotes = event => {
        const value = event.target.value;
        this.setState({
            notesVal: value
        }
        );
    }

    handleSearchWords = event => {
        const value = event.target.value;
        this.setState({
            searchWordsVal: value

        }
        );
    }

    printValues() {
        var string = "<td>"
        var val
        for(val in this.values){
            string +=  val + ", "
        }
        string += "</td>"

        return string
        
    }*/
    
    onSubmit = event => {
        //event.preventDefault();
        const { position,
            compName,
            description,
            deadline,
            statusOfApplication,
            notes}          = this.state;

        // Save the current state as object
        var FB = this.props.firebase.applications()

        // Get current logged in user's userId
        this.props.firebase.auth.onAuthStateChanged(function(user) {
            if (user) { //User is authenticated and logged in
                // Get current uid
                var uid = user.uid;
                //alert(user.uid);
                FB.push(
                    {uid,
                    position,
                    compName,
                    description,
                    deadline,
                    statusOfApplication,
                    notes}
                );
                // alert the user
                alert("Application saved Successfully!")
                // log on console
                console.log("DATA SAVED")
                
            }
            else{
                //if user is not logged in
                alert("Please login with correct credentials!")
                this.props.history.push(ROUTES.HOME)
            }
        
        });
    }
        

    
    render(){
        var date = getTodaysDate();

        const isInvalid =
            this.state.position === '' &&
            this.state.compName === '' &&
            this.state.description === '' &&
            this.state.notes === '';
            //this.state.searchWords  === '';

        return (
            <div >
                <form className='form' onSubmit={this.onSubmit}>
                    <h3>Log New Application</h3>
                    <table>
                        <tbody>
                        <tr>
                            <td><b><label htmlFor="position">Position : </label></b></td>
                            <td><input onChange={this.onChange} type="text" name="position" id="position" placeholder="Position" value={this.state.position} /></td>
                        </tr>
                        <tr>
                            <td><b><label htmlFor="compName">Company Name : </label></b></td>
                            <td><input onChange={this.onChange} type="text" id="compName" placeholder="Name of Company" value={this.state.compName}/></td>
                        </tr>
                        <tr>
                            <td><b><label htmlFor="description">Job Description Url : </label></b></td>
                            <td><input onChange={this.onChange} type="url" id="description" placeholder="Job Description Url" value={this.state.description}/></td>
                        </tr>
                        <tr>
                            <td><b><label htmlFor="deadline">Job application Deadline :</label></b></td>
                            <td><input onChange={this.onChange} type="date" id ="deadline" min={date}/></td>
                        </tr>
                        <tr>
                            <td><b><label htmlFor="statusOfApplication">Stage Of Application:</label></b></td>
                            <td>
                                <select onChange={this.onChange} name="statusOfApplication" id="statusOfApplication">
                                    <option value="Considering">Considering</option>
                                    <option value="Incomplete">Incomplete</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Interviewed">Interviewed</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="Offer">Offer</option>
                                </select>
                            </td>    
                        </tr>
                        <tr>
                            <td><b><label htmlFor="notes">Notes :</label></b></td>
                            <td><textarea onChange={this.onChange} name="notes" id="notes" rows="10" placeholder="Notes" value={this.state.notes}></textarea></td>
                        </tr>
                        
                        <tr>
                            
                        </tr>
                        </tbody>
                    </table>
                    <button disabled={isInvalid} type="submit">
                    Log
                    </button>
                </form>
            </div>
        )
    }
}


export default Form

/*
<td><textarea name="searchWords" id="searchWords" rows="5" placeholder="Search Keywords for Jobs you are interested in... Eg:- 'Software, Java, Web'" value={this.state.searchWordsVal}></textarea></td>             
<tr>
                            <td><b><label htmlFor="searchWords">Search Keywords :</label></b></td>
                            <td><input onChange={this.onChange}  type="text" id="searchWords" placeholder="Search Keywords for Jobs of Interest"  /></td>
                        </tr>
*/