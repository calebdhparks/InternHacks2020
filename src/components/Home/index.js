import React,{ Component } from 'react';
import { withAuthorization } from '../Session';
import 'firebase/auth';
import firebase from 'firebase';

class HomePage extends Component{
  constructor(props){
      super(props)
      this.state = {
          users:[],
          loading:true
      };
      // this.getName=this.getName.bind(this)
}
componentDidMount() {
  this.setState({ loading: true });

  this.props.firebase.users().on('value', snapshot => {
    const usersObject = snapshot.val();

    const usersList = Object.keys(usersObject).map(key => ({
      ...usersObject[key],
      uid: key,
    }));

    this.setState({
      users: usersList,
      loading: false,
    });
  });
}

render(){
  const {users,loading}=this.state;
  console.log(this.state,users,loading)
  return(
    <div>
    <h1>Hello, {!loading&&users[0].username}</h1>
    <p>You have completed 60% of your goals this week</p>
    <h2>Tasks for this week</h2>
    <ul>
      <li>
        <span>
          <strong> Interview with MongoDB</strong> :
        </span>
        <span>
          <strong> Time:</strong> 9:00-10:00
        </span>
        </li>
        <li>
        <span>
          <strong> Hand-in Design Test</strong> :
        </span>
        <span>
          <strong> Time:</strong> 10:00-10:30
        </span>
      </li>
      <li>
      <span>
        <strong> Interview with CODE</strong> :
      </span>
      <span>
        <strong> Time:</strong> 11:00-12:00
      </span>
    </li>
    <li>
    <span>
      <strong> Phone interview with Fly</strong> :
    </span>
    <span>
      <strong> Time:</strong> 1:30-2:00
    </span>
  </li>
  <li>
  <span>
    <strong> Do More Applications!</strong> :
  </span>
  <span>
    <strong> Time:</strong> 3:00-5:30
  </span>
</li>
    </ul>
    <h2>New Job listings</h2>
    <ul>
      <li>
        <span>
          <strong> Company:</strong> Facebook
        </span>
        <span>
          <strong> title:</strong> Product Designer
        </span>
        <span>
          <strong> Url</strong> {
            <a href='https://www.facebook.com/careers/' target="_blank">Facebook.com/careers</a>}
        </span>
      </li>
      <li>
        <span>
          <strong> Company:</strong> Zendesk
        </span>
        <span>
          <strong> title:</strong> UI/UX Designer
        </span>
        <span>
          <strong> Url</strong> {
            <a href='https://airtable.com/careers' target="_blank">airtable.com/careers</a>}
        </span>
      </li>
      <li>
        <span>
          <strong> Company:</strong> Spotify
        </span>
        <span>
          <strong> title:</strong> Experince Designer
        </span>
        <span>
          <strong> Url</strong> {
            <a href='https://www.spotifyjobs.com/' target="_blank">Spotify.com/careers</a>}
        </span>
      </li>
      <li>
        <span>
          <strong> Company:</strong> Uniqlo
        </span>
        <span>
          <strong> title:</strong> Graphic Designer
        </span>
        <span>
          <strong> Url</strong> {
            <a href='https://www.uniqlo.com/us/en/employment/job-opportunities.html' target="_blank">Uniqlo.com/careers</a>}
        </span>
      </li>
      <li>
        <span>
          <strong> Company:</strong> IBM
        </span>
        <span>
          <strong> title:</strong> Designer
        </span>
        <span>
          <strong> Url</strong> {
            <a href='https://www.ibm.com/us-en/employment/' target="_blank">IBM.com/careers</a>}
        </span>
      </li>
      <li>and more{<a href='search'> here</a>}</li>
    </ul>
    <h2>Achievements</h2>
    <ul>
      <li>
        <span>
          <strong> 5-Day Streak</strong> :
        </span>
        <span>
          <strong> Progress:</strong> 50%
        </span>
        </li>
        <li>
        <span>
          <strong> 2 Pings in a Day</strong> :
        </span>
        <span>
          <strong> Progress:</strong> 75%
        </span>
      </li>
      <li>
      <span>
        <strong> Completed Saved Applications</strong> :
      </span>
      <span>
        <strong> Progress:</strong> 65%
      </span>
    </li>
    <li>
    <span>
      <strong> First Goal Met</strong> :
    </span>
    <span>
      <strong> Progress:</strong> Completed!
    </span>
  </li>
  </ul>
    </div>
  )
}
}





const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
// getName(){
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) { //User is authenticated and logged in
//             // Get current uid
//             var name = user.email;
//             console.log(name);
//             // this.setState({email:name}).bind(this)
//             //alert(user.uid);
//             // alert the user
//           }
//         }).bind(this);
//       }
