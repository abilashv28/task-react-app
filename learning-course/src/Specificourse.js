import React, { Component } from 'react'
import Defaultcourse from './Defaultcourse'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

let cid=0
let points = []
class Specificourse extends Component {

  state = {   
      coursedisplay : 'false',
      chapter : 0,
      progress: 0,
      chaptercompleted: '',
      eachchaptercent:0
    }

  courseDetails=[  
      {
        id: 0,
        course:"Python",
        authour:"Vj Jana",
        Uploaded_by:"Python is a programming language that lets you work more quickly and integrate your systems more effectively.",
        cent: 25,
        Chapter : [{id:0,name:"Introduction",content:"Python is a programming language that lets you work more quickly and integrate your systems more effectively.\nIt supports multiple programming paradigms beyond object-oriented programming, such as procedural and functional programming."},{id:1,name:"JAVA VS PYTHON",content:"Java is a compiled+ interpreted Language, whereas Python is an Interpreted Language.Java is statically typed, whereas Python is dynamically typed.Java has a complex learning curve, whereas Python is easy to learn and use"},
        {id:2,name:"PYTHON FEATURES",content:"Data science Scientific and mathematical computing, Web development, Finance and trading ,System automation and administration Computer graphics,Basic game development,Security and penetration,testing"},
        {id:3,name:"ADVANTAGES",content:"Simple to Use and Understand,Productivity has Increased,Interpreted Language"}]
      },
      {
        id: 1,
        course:"javascript",
        authour:"Abii",
        Uploaded_by:"Abilash",
        cent: 25,
        Chapter : [{id:0,name:"Introduction",content:"Welcome back1"},{id:1,name:"going head",content:"hi how are you"},{id:2,name:"Introduction",content:"Welcome back3"},{id:3,name:"Introduction",content:"Welcome back4"}]
      },
      {
        id: 2,
        course:"React",
        authour:"Jana",
        Uploaded_by:"Abilash",
        Content: "jana,abiii"
      },
      {
        id: 4,
        course:"Node",
        authour:"Karan",
        Uploaded_by:"Abilash",
        Content: "jana,abiii"
      }
  ]
  
   
  
  
  nextChapter = () => {
    this.setState({chapter:(this.state.chapter+1)});  
    if(this.state.progress!==100){
      if((this.state.chaptercompleted ==='') || (this.state.chaptercompleted<this.state.chapter) )
      {
      this.setState({progress:(this.state.progress+this.courseDetails[cid].cent)})
      this.setState({chaptercompleted:this.state.chapter})
      }
    }   
  }

  prevChapter = () => {
    this.setState({chapter:(this.state.chapter-1)})
  }
  render() {
   
    const changedisplaystate = ()=>{
      this.setState({coursedisplay:'true'})
    }
    const {selectedcourse} = this.props 
    cid = selectedcourse
    const currentchapter = this.courseDetails[selectedcourse].Chapter.map((c) => 
    this.state.chapter===c.id 
    ? <div>
      <h1 className='heading-style'>{c.name}</h1>
    <br />
      <div className='para border center'><span className='center'>{c.content.split("|")}</span></div>
      </div> 
    : <div />
        )
    
    return (
      this.state.coursedisplay==='true' ? 
        <Defaultcourse coursedisplayorder={'true'} />
      :
        <div>
           <br />
        <button className='style float-right button btn-primary'
         onClick={()=>changedisplaystate()}>Close</button>
        <div className='style container'>  
         <div className='row vertical-center'>
         <div className='col'>
         <button onClick={()=>{this.prevChapter()}}>PREVIOUS</button>
        </div>
        <div className='col'>
        {currentchapter}
        </div>
        <div className='col '>
        <button className='' onClick={()=>{this.nextChapter()}}>NEXT</button>
        
        </div>
        </div>
        </div>
       
        <h2 className='percent'>{this.state.progress}%</h2>
        </div>
    )
  }
}

export default Specificourse