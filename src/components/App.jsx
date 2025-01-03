import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import Bio from './Bio'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Resume from './Resume'

function App() {
  const [activeIndex, setActiveIndex]=useState(0);
  const [experience, setExperience] = useState(
    {
        "title": "",
        "company": "",
        "path": "",
        "start": "",
        "end": ""
    });
  const [education, setEducation] = useState(
    {
        "schoolName": "",
        "course": "",
        "start": "",
        "end": ""
    });
  const [generalInfo, setGeneralInfo] = useState(
    {
        "firstname": "",
        "lastname": "",
        "path": "",
        "phone": "",
        "email": ""
    });
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  const skillsArray = skills.split(" ").map(el=>{ return {value:el, id:crypto.randomUUID()}}); 



  function changeSkills(e){
    setSkills(e.target.value);
  }
  function changeBio(e){
    setBio(e.target.value);
  }

  function clickNext() {
    if(activeIndex < 5){
      setActiveIndex(activeIndex+1)
    }
  }
  function clickPrev() {
    if(activeIndex > 0){
      setActiveIndex(activeIndex-1)
    }
  }

  const fullName = `${generalInfo.firstname} ${generalInfo.lastname}` 


  return (
    <div className="app">
      <GeneralInfo next={clickNext} isActive={activeIndex===0} generalInfo={generalInfo} change={(x)=>setGeneralInfo(x)} />
      <Bio prev={clickPrev} next={clickNext} isActive={activeIndex===1} value={bio} change={changeBio}  />
      <Education next={clickNext} prev={clickPrev} isActive={activeIndex===2} education={education} change={(x)=>setEducation(x)}/>
      <Skills isActive={activeIndex===3} next={clickNext} prev={clickPrev} value={skills} change={changeSkills}  />
      <Experience submit={clickNext} prev={clickPrev} isActive={activeIndex===4} experience={experience} change={(x)=>setExperience(x)}/>
      <Resume fullName={fullName} back={clickPrev} experience={experience} education={education} generalInfo={generalInfo} isActive={activeIndex===5} skills={skillsArray} bio={bio} /> 
    </div>
  )
}

export default App
