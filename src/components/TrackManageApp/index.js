import React, { Component } from 'react';
import Form from './Form.js';
import { withFirebase } from '../Firebase';

function TrackMangeApp(){
    
    return(
        <Form />
    )
}

TrackMangeApp = withFirebase(Form);

export default TrackMangeApp