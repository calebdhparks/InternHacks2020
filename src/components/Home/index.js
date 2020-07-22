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
    <h1>Hello, {!loading&&users[0].username}</h1>
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
