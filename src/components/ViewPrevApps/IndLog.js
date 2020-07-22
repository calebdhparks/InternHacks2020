import React, { Component } from 'react';


function IndLog(props){
    let inlinestatusOfApplication = undefined;
    let linkDisable = true;
    if(props.fields.statusOfApplication == "Considering" || props.fields.statusOfApplication == "Incomplete" ){
        inlinestatusOfApplication= { 'width': '135px',
            'height': '39px',
            'padding' : '10px',
            'border-radius': '10px', 
            'background': '#E8EFFA',
            'color': '#5589DB'};
    }   
    else if(props.fields.statusOfApplication == "Applied"){
        inlinestatusOfApplication= { 'width': '135px',
            'height': '39px',
            'padding' : '10px',
            'border-radius': '10px', 
            'background': '#FFF8E8',
            'color': '#F3A022'};
    }
    else if(props.fields.statusOfApplication == "Interviewed"){
        inlinestatusOfApplication= { 'width': '135px',
        'height': '39px',
        'padding' : '10px',
        'border-radius': '10px', 
        'background': '#F5F1FA',
        'color': '#884FCF'};
    }
    else if(props.fields.statusOfApplication == "Offer"){
        inlinestatusOfApplication= { 'width': '135px',
        'height': '39px',
        'padding' : '10px',
        'border-radius': '10px', 
        'background': '#F0FEED',
        'color': '#27AE60'};
    }
    else if(props.fields.statusOfApplication == "Rejected"){
        inlinestatusOfApplication= { 'width': '135px',
        'height': '39px',
        'padding' : '10px',
        'border-radius': '10px', 
        'background': '#ffcccc',
        'color': '#cc0000'};
    }

    console.log(props.fields.description ==='');
    if(props.fields.description ===''){
        linkDisable = false;
    }
        

    return(
        <div>
            <hr/>
            <tr>
                <td>
                    <span className='appTracker_compName'>{props.fields.compName} <span className='appTracker_position'>: {props.fields.position}</span></span>
                </td>
                <td>
                    <div ><span style={inlinestatusOfApplication}>{props.fields.statusOfApplication} </span></div>
                </td>
                <td>
                    <label className='appTracker_description'>{props.fields.deadline} </label>
                </td>
                <td>
                    <label className='appTracker_description'>{(!linkDisable)? "-": <a href={props.fields.description}> Job description </a>  }</label>
                </td>
                <td>
                    <span className='appTracker_notes'>{props.fields.notes} </span>
                </td>
                
            </tr>
            
        </div>
    )
}

/*class IndLog extends Component{
    constructor(props){
        super(props)
        //console.log("constructor")
        console.log("child constructor")
        this.state = {
            position : this.props.fields.position,
            compName: this.props.fields.compName,
            description : "",
            deadline : "",
            statusOfApplication : "",
            notes : "",
        };
        
    }
    

    componentDidMount(){
        //console.log("componentDidMount")
        this.componentDidUpdate()
    }

    render(){
        console.log("InLog render")
        
        return(
            <div>
                <h2>{this.state.compName} </h2>
                <h4>{this.state.position}</h4>
            </div>
            
        )
        
    }
}*/

export default IndLog
