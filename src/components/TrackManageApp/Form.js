
import React, { Component } from 'react';

let formatTwoDigits = (digit) => ("0" + digit).slice(-2);

function getTodaysDate(){
    var tempDate = new Date();
    return `${tempDate.getFullYear()}-${formatTwoDigits(tempDate.getMonth()+1)}-${formatTwoDigits(tempDate.getDate())}`; 
}

function Form(){
    var date = getTodaysDate();
    return (<div className= "division">
            <form className='form'>
                <h3>Log New Application</h3>
                <table>
                    <tbody>
                    <tr>
                        <td><b><label htmlFor="position">Position : </label></b></td>
                        <td><input type="text" id="position" placeholder="Position" /></td>
                    </tr>
                    <tr>
                        <td><b><label htmlFor="compName">Company Name : </label></b></td>
                        <td><input type="text" id="compName" placeholder="Name of Company" /></td>
                    </tr>
                    <tr>
                        <td><b><label htmlFor="description">Job Description Url : </label></b></td>
                        <td><input type="url" id="description" placeholder="Job Description Url" /></td>
                    </tr>
                    <tr>
                        <td><b><label htmlFor="deadline">Job application Deadline :</label></b></td>
                        <td><input type="date" id ="deadline" min={date}/></td>
                    </tr>
                    <tr>
                        <td><b><label htmlFor="statusOfApplication">Stage Of Application:</label></b></td>
                        <td>
                            <select name="statusOfApplication" id="statusOfApplication">
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
                        <td><textarea name="notes" id="notes" rows="10" placeholder="Notes"></textarea></td>
                    </tr>
                    <tr>
                        <td><b><label htmlFor="searchWords">Search Keywords :</label></b></td>
                        <td><textarea name="searchWords" id="searchWords" rows="5" placeholder="Search Keywords for Jobs you are interested in... Eg:- 'Software, Java, Web'"></textarea></td>
                    </tr>
                    </tbody>
                </table>
                <button  type="submit">
                Log
                </button>
            </form>
        </div>

    )
}

export default Form