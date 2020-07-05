import React from "react";

function Search(){
    return (
        <form>
            <h1>Job Explorer</h1>
            <input type="text" class="form-control" name="description" placeholder="Yo"></input>
            <button type="submit">Search!</button>
        </form> )
}

export default Search