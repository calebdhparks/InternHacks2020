import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { apps } from 'firebase';
import nlp from 'compromise';

class Rec extends Component{
    constructor(props){
        super(props)
        console.log("constructor")

        this.state = {
            userId : undefined,
            appsLogData: [],
            appsLog: undefined,
            display:false,
            myTags:[],
            myTagsCount:[],
            firstTag:'',
            firstTagCount:0,
            firstTagLoc:0,
            tags:ROUTES.TAGS
        };
        this.componentDidMount=this.componentDidMount.bind(this)
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
        this.setState({display:true})
        console.log("componentDidMount")
        const tags=ROUTES.TAGS

        var myTags=[]
        var myTagsCount=[]
        myTagsCount.length=tags.length;
        myTagsCount.fill(0);

        if(this.props.firebase.auth.currentUser != null){
            console.log("componentDidMount Success")
            console.log('state',this.state.tags)
            // current logged in user id
            let uid = this.props.firebase.auth.currentUser.uid
            let userList = []
            let appsLogD = []
            //console.log(this.userId)

            let Data = this.props.firebase.applications().once('value').then(function(snapshot) {

                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    // console.log(childData.position)

                    if(childData.uid != uid){
                        appsLogD.push(<p>HI LOL</p>)
                        var found=false;
                        const name=nlp(childData.position)
                        console.log("name",name.text())
                        for (var j =0;j<tags.length;j++){
                          // console.log(tags[j],name.has(tags[j]))
                          if(name.has(tags[j])){
                            console.log("found",tags[j])
                            myTags.push(tags[j]);
                            myTagsCount[j]+=1;
                            found=true;
                          }
                        }
                        if (!found){
                          myTags.push(tags[0])
                        }
                        console.log(myTags,myTagsCount)

                    }

                    });
            });

            this.setState({
                userId: uid,
                appsLog : appsLogD,
                display:false,
                myTags:myTags,
                myTagsCount:myTagsCount
            })


            // console.log(this.jobTags)
        }


    }


    render(){
        //var userId = this.props.firebase.auth.currentUser;
        var firstTag=''
        var firstTagCount=0
        var firstTagLoc=0
        firstTagCount=Math.max(...this.state.myTagsCount);
        firstTagLoc=this.state.myTagsCount.indexOf(firstTagCount);
        firstTag=this.state.tags[firstTagLoc];
        console.log(firstTagCount,firstTagLoc,firstTag)
        const {appsLog,display}=this.state
        console.log("JKHHKGGH",this.state)
        console.log(this.state.appsLog)

        return(
            <div>
                <span className='titleJobs'>Job Recommender</span>
                {!this.state.display&&<p>Try searching for {firstTag} roles</p>}
            </div>

        )

    }
}

export default withFirebase(Rec)
// <table className='jobAppTable'>
//     {this.state.appsLog
// </table>
