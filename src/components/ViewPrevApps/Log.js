import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { apps } from 'firebase';
import IndLog from './IndLog.js';

class Log extends Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state = {
            userId : undefined,
            data: [],
            keys: [],
            appsLogData: [],
            appsLog: undefined
        };
        //var values = [];
        //this.onChange = this.onChange.bind(this)
        //this.componentWillMount = this.componentWillMount.bind(this);
    }
    
   /* componentWillMount(){
        console.log("componentWillMount")
        setTimeout(() => {
            console.log("componentWillMount setTimeout")
            this.componentDidMount()
            
          }, 1000)          
        
    }*/

    componentDidMount(){
        console.log("componentDidMount")
        if(this.props.firebase.auth.currentUser != null){
            console.log("componentDidMount Success")
            // current logged in user id
            let uid = this.props.firebase.auth.currentUser.uid
            let objects = []
            let saveKeys = []
            let appsLogD = []
            //console.log(this.userId)
            
            let Data = this.props.firebase.applications().once('value').then(function(snapshot) {
                
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    if(childData.uid == uid){
                        //saveKeys.push(childKey)
                        //objects.push(childData)
                        appsLogD.push(<IndLog key={childKey} fields={childData} />)
                        //console.log(childData)
                    }
                
                    });
            });

            this.setState({
                userId: uid,
                data: objects,
                keys: saveKeys,
                appsLog : appsLogD
            })
        }
    }
    

    render(){
        //var userId = this.props.firebase.auth.currentUser;
        console.log("Log render")
        console.log(this.state.appsLog)
        
        return(
            <div className='jobApptrackDiv'>
                <span className='titleJobs'>Jobs Application Tracker</span>
                <table className='jobAppTable'>
                    {this.state.appsLog}
                </table> 
            </div>
            
        )
        
    }
}

export default Log
