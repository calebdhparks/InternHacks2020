import React, { Component } from 'react';
import Log from './Log.js';
import { withFirebase } from '../Firebase';

//return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
//});

function ViewPrevApps(){
  let uid = this.props.firebase.auth.currentUser.uid
            
  console.log(uid)

  let Data = this.props.firebase.applications().once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData)
    });
  });
  
    return(
        <Log />
    )
}

ViewPrevApps = withFirebase(Log);

export default ViewPrevApps
