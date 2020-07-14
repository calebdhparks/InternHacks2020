import React, { Component } from 'react';
import nlp from 'compromise';
const App = () => (
  <div>
    <h1>Welcome to Ping-A-Job</h1>
    <Test text={jobList1}/>
    <p>{"\n"}</p>
    <Test text={jobList2}/>
  </div>
);
const jobList1=['hsdghsgsjk ','Software Quality Operations Associate','AI/ML - Full Stack Engineer, Chief of Staff Team',
'Full Stack Software Engineer','Finance Reporting Developer','Finance & Strategy Analyst, Cash App - Investing',
'Data Science Python','People Data Scientist and Analytics Lead','Data Scientist, Autonomy Operations'];
const jobList2=['Business Analyst','Software Quality Operations Associate','Security Business Operations Specialist',
'Full Stack Software Engineer','Finance Reporting Developer','Finance & Strategy Analyst, Cash App - Investing',
'Data Science Python','People Data Scientist and Analytics Lead','Data Scientist, Autonomy Operations'];
const tags=['N/A','Software','Full Stack','Data (Science|Scientist|Analytics)','Finance','Business'];
class Test extends Component {
  constructor(props){
    super(props);
    this.text=this.props.text;
    this.tags=tags;
    this.textTags=[]
    this.jobTags=[]
    this.jobTags.length=this.tags.length;
    this.jobTags.fill(0);
    for (var i = 0;i<this.text.length;i++){
    const name = nlp(this.text[i]);
    var thisTags=[]
    console.log(name.text())
    var found=false;
    for (var j =0;j<this.tags.length;j++){
      console.log(this.tags[j],name.has(this.tags[j]))
      if(name.has(this.tags[j])){
        thisTags.push(this.tags[j]);
        this.jobTags[j]+=1;
        found=true;
      }
    }
    if (!found){
      thisTags.push(this.tags[0])
    }
    this.textTags.push(thisTags,'\n');
    console.log(this.jobTags)
  }
  }
  render(){
  return [this.textTags,this.jobTags]
    // var A=<h1>{name.match('software #Noun?').text()}</h1>;
    // var B =<h1>{name.match('Full Stack #Noun?').text()}</h1>
    // return A||B;
  }
}
export default App;
