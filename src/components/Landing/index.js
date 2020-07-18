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
const jobList1=['hsdghsgsjk ','Full Stack Quality Operations Associate','AI/ML - Full Stack Engineer, Chief of Staff Team',
'Full Stack Software Engineer','Finance Reporting Developer','Finance & Strategy Analyst, Cash App - Investing',
'Data Science Python','People Data Scientist and Analytics Lead','Data Scientist, Autonomy Operations'];
const jobList2=['Business Analyst','Software Quality Operations Associate','Security Business Operations Specialist',
'Full Stack Software Engineer','Finance Reporting Developer','Finance & Strategy Analyst, Cash App - Investing',
'Data Science Python','People Data Scientist and Analytics Lead','Data Scientist, Autonomy Operations'];
const tags=['N/A','Software','Full Stack','Data (Science|Scientist|Analytics)','Finance','Business','Python'];
class Test extends Component {
  constructor(props){
    super(props);
    this.text=this.props.text;
    this.tags=tags;
    this.FirstTag={
      tag: this.tags[0],
      count: 0,
    };
    this.SecondTag={
      tag: this.tags[0],
      count: 0,
    };

    this.textTags=[]
    this.jobTags=[]
    this.jobTags.length=this.tags.length;
    this.jobTags.fill(0);
    for (var i = 0;i<this.text.length;i++){
      const name = nlp(this.text[i]);
      var thisTags=[]
      // console.log(name.text())
      var found=false;
      for (var j =0;j<this.tags.length;j++){
        // console.log(this.tags[j],name.has(this.tags[j]))
        if(name.has(this.tags[j])){
          thisTags.push(this.tags[j]);
          this.jobTags[j]+=1;
          found=true;
        }
      }
      if (!found){
        thisTags.push(this.tags[0])
      }
      // console.log('MAx',Math.max(...this.jobTags),this.jobTags.indexOf(Math.max(...this.jobTags)))
      // console.log(this.FirstTag)
      this.textTags.push(thisTags,'\n');
  }
    this.FirstTag.count=Math.max(...this.jobTags);
    var idx1=this.jobTags.indexOf(this.FirstTag.count)
    this.FirstTag.tag=this.tags[idx1];
    console.log(this.jobTags)
    console.log(this.FirstTag)
    var second=minmax(this.jobTags,0,this.FirstTag.count)
    // console.log(second.max)
    this.SecondTag.count=second.max
    if (this.FirstTag.count==this.SecondTag.count){
      this.SecondTag.tag=this.tags[this.jobTags.indexOf(second.max,idx1+1)]
    }
    else{
      this.SecondTag.tag=this.tags[this.jobTags.indexOf(second.max)]
    }

    console.log(this.SecondTag)
  }

  render(){
  return [this.textTags,this.jobTags,this.FirstTag.tag,this.SecondTag.tag]
    // var A=<h1>{name.match('software #Noun?').text()}</h1>;
    // var B =<h1>{name.match('Full Stack #Noun?').text()}</h1>
    // return A||B;
  }
}
function minmax(arr, begin, end) {
    arr = [].slice.apply(arr, [].slice.call(arguments, 1));
    return {
        'min' : Math.min.apply(Math, arr),
        'max' : Math.max.apply(Math, arr)
    }
}

export default App;
